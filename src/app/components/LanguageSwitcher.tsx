"use client";

import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { Globe2 } from "lucide-react";

const locales = ["en", "or"] as const;

export default function LanguageSwitcher() {
  const t = useTranslations("Language");
  const locale = useLocale();
  const pathname = usePathname();

  const options = useMemo(
    () =>
      locales.map((loc) => ({
        value: loc,
        label: t(loc),
      })),
    [t]
  );

  return (
    <div className="flex items-center gap-2 rounded-full border border-brand-sand/70 bg-brand-surface/70 px-3 py-1.5 text-xs font-semibold text-brand-accent backdrop-blur-xl">
      <Globe2 className="h-3.5 w-3.5 text-brand-gold" aria-hidden />
      <span className="sr-only">{t("aria")}</span>
      {options.map((option, index) => {
        const isActive = locale === option.value;
        return (
          <Link
            key={option.value}
            href={pathname}
            locale={option.value}
            className={`transition ${
              isActive ? "text-brand-gold" : "text-brand-muted hover:text-brand-accent"
            }`}
            aria-current={isActive ? "true" : undefined}
          >
            {option.label}
            {index < options.length - 1 ? <span className="mx-1 text-brand-sand">/</span> : null}
          </Link>
        );
      })}
    </div>
  );
}
