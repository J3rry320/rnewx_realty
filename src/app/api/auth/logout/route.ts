import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIES, COOKIE_OPTIONS } from "@/lib/auth/constants";
import { getFirebaseAdminAuth } from "@/lib/auth/firebaseAdmin";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const sessionCookie = request.cookies.get(AUTH_COOKIES.session)?.value;

  if (sessionCookie) {
    try {
      const adminAuth = getFirebaseAdminAuth();
      const decoded = await adminAuth.verifySessionCookie(sessionCookie, true);
      await adminAuth.revokeRefreshTokens(decoded.sub);
    } catch {
      // ignore revoke failures
    }
  }

  const response = NextResponse.json({ ok: true });
  const secure = process.env.NODE_ENV === "production";

  response.cookies.set(AUTH_COOKIES.session, "", {
    ...COOKIE_OPTIONS,
    httpOnly: true,
    secure,
    maxAge: 0,
  });

  response.cookies.set(AUTH_COOKIES.idToken, "", {
    ...COOKIE_OPTIONS,
    httpOnly: true,
    secure,
    maxAge: 0,
  });

  return response;
}
