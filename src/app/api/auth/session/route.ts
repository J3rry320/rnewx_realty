import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_OPTIONS, ID_TOKEN_COOKIE_MAX_AGE_MS, SESSION_COOKIE_MAX_AGE_MS, AUTH_COOKIES } from "@/lib/auth/constants";
import { getFirebaseAdminAuth } from "@/lib/auth/firebaseAdmin";
import { syncUserFromToken } from "@/lib/auth/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { idToken } = (await request.json()) as { idToken?: string };

    if (!idToken) {
      return NextResponse.json({ error: "Missing idToken" }, { status: 400 });
    }

    const adminAuth = getFirebaseAdminAuth();
    const decoded = await adminAuth.verifyIdToken(idToken);
    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn: SESSION_COOKIE_MAX_AGE_MS,
    });

    const user = await syncUserFromToken(decoded);

    const response = NextResponse.json({ ok: true, user });
    const secure = process.env.NODE_ENV === "production";

    response.cookies.set(AUTH_COOKIES.session, sessionCookie, {
      ...COOKIE_OPTIONS,
      httpOnly: true,
      secure,
      maxAge: Math.floor(SESSION_COOKIE_MAX_AGE_MS / 1000),
    });

    response.cookies.set(AUTH_COOKIES.idToken, idToken, {
      ...COOKIE_OPTIONS,
      httpOnly: true,
      secure,
      maxAge: Math.floor(ID_TOKEN_COOKIE_MAX_AGE_MS / 1000),
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
