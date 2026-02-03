import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthContext } from "@/lib/auth/server";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const auth = await getAuthContext(request, { ensureUser: true, allowIdTokenFallback: true });

  if (!auth?.user) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user: auth.user });
}
