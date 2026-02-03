"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type Theme = "light" | "dark";

const storageKey = "rnewx-theme";

export default function ThemeToggle() {
  const t = useTranslations("Theme");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey) as Theme | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
      return;
    }

    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    const nextTheme: Theme = prefersLight ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="glass flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-brand-accent transition hover:border-brand-gold/70"
      aria-label={t("aria")}
      type="button"
    >
      <span className="h-2 w-2 rounded-full bg-brand-gold" />
      {theme === "dark" ? t("light") : t("dark")}
    </button>
  );
}
