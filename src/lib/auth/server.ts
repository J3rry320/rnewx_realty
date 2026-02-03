import type { DecodedIdToken } from "firebase-admin/auth";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { dbConnect } from "@/lib/db";
import { AuthProvider, UserRole, UserStatus } from "@/lib/db/enum-config";
import { UserModel } from "@/lib/db/models/User";
import { AUTH_COOKIES } from "@/lib/auth/constants";
import { getFirebaseAdminAuth } from "@/lib/auth/firebaseAdmin";

export type SafeUser = {
  id: string;
  email?: string;
  phone?: string;
  name?: string;
  roles: UserRole[];
  primaryRole?: UserRole;
  status: UserStatus;
  avatarUrl?: string;
};

export type AuthContext = {
  firebase: DecodedIdToken;
  user: SafeUser | null;
};

type AuthOptions = {
  ensureUser?: boolean;
  allowIdTokenFallback?: boolean;
  checkRevoked?: boolean;
};

const mapProvider = (provider?: string): AuthProvider => {
  switch (provider) {
    case "password":
      return AuthProvider.EMAIL;
    case "google.com":
      return AuthProvider.GOOGLE;
    case "phone":
      return AuthProvider.PHONE;
    default:
      return AuthProvider.FIREBASE;
  }
};

const toSafeUser = (user: {
  _id: unknown;
  email?: string;
  phone?: string;
  name?: { full?: string };
  roles?: UserRole[];
  primaryRole?: UserRole;
  status: UserStatus;
  avatarUrl?: string;
}): SafeUser => ({
  id: String(user._id),
  email: user.email,
  phone: user.phone,
  name: user.name?.full,
  roles: user.roles ?? [UserRole.CUSTOMER],
  primaryRole: user.primaryRole,
  status: user.status,
  avatarUrl: user.avatarUrl,
});

const getBearerToken = (req?: NextRequest): string | null => {
  if (!req) {
    return null;
  }

  const header =
    req.headers.get("authorization") || req.headers.get("Authorization");
  if (!header) {
    return null;
  }

  const match = header.match(/^Bearer (.+)$/i);
  return match?.[1] ?? null;
};

const getSessionCookieValue = async (
  req?: NextRequest,
): Promise<string | null> => {
  if (req?.cookies) {
    return req.cookies.get(AUTH_COOKIES.session)?.value ?? null;
  }
  const cookie = await cookies();

  return cookie.get(AUTH_COOKIES.session)?.value ?? null;
};

export const syncUserFromToken = async (
  token: DecodedIdToken,
): Promise<SafeUser> => {
  await dbConnect();

  const email = token.email?.toLowerCase();
  const phone = token.phone_number;
  const displayName = token.name ?? token.email ?? token.phone_number ?? "";
  const provider = mapProvider(token.firebase?.sign_in_provider);

  let user = await UserModel.findOne({ "auth.uid": token.uid });

  if (!user && email) {
    user = await UserModel.findOne({ email });
    if (user) {
      user.auth = {
        provider,
        uid: token.uid,
        emailVerified: token.email_verified ?? false,
        phoneVerified: Boolean(token.phone_number),
      };
    }
  }

  if (!user) {
    user = await UserModel.create({
      name: { full: displayName },
      email,
      phone,
      roles: [UserRole.CUSTOMER],
      primaryRole: UserRole.CUSTOMER,
      status: UserStatus.ACTIVE,
      auth: {
        provider,
        uid: token.uid,
        emailVerified: token.email_verified ?? false,
        phoneVerified: Boolean(token.phone_number),
      },
      lastLoginAt: new Date(),
    });

    return toSafeUser(user);
  }

  user.email = email ?? user.email;
  user.phone = phone ?? user.phone;
  user.name = {
    ...(user.name ?? {}),
    full: displayName || user.name?.full,
  };
  user.auth = {
    ...(user.auth ?? {}),
    provider,
    uid: token.uid,
    emailVerified: token.email_verified ?? user.auth?.emailVerified,
    phoneVerified: Boolean(token.phone_number) || user.auth?.phoneVerified,
  };
  user.lastLoginAt = new Date();

  await user.save();
  return toSafeUser(user);
};

export const getAuthContext = async (
  req?: NextRequest,
  options: AuthOptions = {},
): Promise<AuthContext | null> => {
  const sessionCookie = await getSessionCookieValue(req);
  const adminAuth = getFirebaseAdminAuth();

  let token: DecodedIdToken | null = null;

  try {
    if (sessionCookie) {
      token = await adminAuth.verifySessionCookie(
        sessionCookie,
        options.checkRevoked ?? false,
      );
    } else if (options.allowIdTokenFallback) {
      const bearer = getBearerToken(req);
      if (bearer) {
        token = await adminAuth.verifyIdToken(bearer);
      }
    }
  } catch {
    token = null;
  }

  if (!token) {
    return null;
  }

  const user =
    options.ensureUser === false ? null : await syncUserFromToken(token);

  return {
    firebase: token,
    user,
  };
};
