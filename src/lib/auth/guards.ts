import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { UserRole } from "@/lib/db/enum-config";
import { getAuthContext, AuthContext } from "@/lib/auth/server";
import { hasAnyRole } from "@/lib/auth/roles";

type GuardOptions = {
  roles?: UserRole[];
};

type GuardedHandler<Context = unknown> = (
  req: NextRequest,
  context: Context,
  auth: AuthContext
) => Promise<Response> | Response;

export const withAuth = <Context = unknown>(
  handler: GuardedHandler<Context>,
  options: GuardOptions = {}
) => {
  return async (req: NextRequest, context: Context) => {
    const auth = await getAuthContext(req, { ensureUser: true, allowIdTokenFallback: true });

    if (!auth?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (options.roles && !hasAnyRole(auth.user.roles, options.roles)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return handler(req, context, auth);
  };
};

export const requireAuth = async (
  req: NextRequest,
  options: GuardOptions = {}
): Promise<AuthContext> => {
  const auth = await getAuthContext(req, { ensureUser: true, allowIdTokenFallback: true });

  if (!auth?.user) {
    throw new Error("UNAUTHORIZED");
  }

  if (options.roles && !hasAnyRole(auth.user.roles, options.roles)) {
    throw new Error("FORBIDDEN");
  }

  return auth;
};
