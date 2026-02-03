export const AUTH_COOKIES = {
  session: "__session",
  idToken: "rnewx_id_token",
} as const;

export const SESSION_COOKIE_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
export const ID_TOKEN_COOKIE_MAX_AGE_MS = 1000 * 60 * 60; // 1 hour

export const COOKIE_OPTIONS = {
  path: "/",
  sameSite: "lax" as const,
};
