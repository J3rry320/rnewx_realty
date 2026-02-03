import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const resolvedLocale = routing.locales.includes(
    requested as (typeof routing.locales)[number]
  )
    ? (requested as (typeof routing.locales)[number])
    : routing.defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  };
});
