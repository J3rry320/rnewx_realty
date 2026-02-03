"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Moon, Sun } from "lucide-react";

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
      className="flex items-center gap-2 rounded-full border border-brand-sand/70 bg-brand-surface/70 px-3 py-1.5 text-xs font-semibold text-brand-accent backdrop-blur-xl transition hover:border-brand-gold/70"
      aria-label={t("aria")}
      aria-pressed={theme === "dark"}
      type="button"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-surface-strong text-brand-gold">
        {theme === "dark" ? <Sun className="h-3.5 w-3.5" aria-hidden /> : <Moon className="h-3.5 w-3.5" aria-hidden />}
      </span>
      <span className="hidden sm:inline">{theme === "dark" ? t("light") : t("dark")}</span>
    </button>
  );
}
