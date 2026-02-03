"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import ThemeToggle from "@/app/components/ThemeToggle";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

type NavLink = {
  href: string;
  label: string;
};

type NavbarProps = {
  links?: NavLink[];
  sticky?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function Navbar({
  links,
  sticky = true,
  ctaHref = "/#contact",
  ctaLabel,
}: NavbarProps) {
  const tNav = useTranslations("Nav");
  const tBrand = useTranslations("Brand");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks: NavLink[] =
    links ??
    [
      { href: "/#services", label: tNav("services") },
      { href: "/#bento", label: tNav("trust") },
      { href: "/#listings", label: tNav("portfolio") },
      { href: "/#contact", label: tNav("contact") },
    ];

  const ctaText = ctaLabel ?? tNav("schedule");

  return (
    <div
      className={
        sticky
          ? "sticky top-0 z-50 border-b border-brand-sand/60 bg-brand-surface/65 backdrop-blur-2xl shadow-lg shadow-brand-ink/10"
          : "border-b border-brand-sand/60 bg-brand-surface/65 backdrop-blur-2xl"
      }
    >
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-terracotta text-brand-cream font-semibold">
            R
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide">{tBrand("name")}</p>
            <p className="text-sm text-brand-muted">{tBrand("tagline")}</p>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 text-sm font-medium text-brand-muted md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="transition hover:text-brand-accent"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href={ctaHref}
              className="rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {ctaText}
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-sand/70 bg-brand-surface/70 text-brand-accent md:hidden"
            aria-label={mobileOpen ? tNav("closeMenu") : tNav("openMenu")}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </header>
      {mobileOpen ? (
        <div className="border-t border-brand-sand/60 bg-brand-surface/75 backdrop-blur-2xl md:hidden">
          <div className="mx-auto w-full max-w-6xl space-y-4 px-6 py-4">
            <nav className="flex flex-col gap-3 text-sm font-medium text-brand-muted">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="transition hover:text-brand-accent"
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-wrap items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-ink shadow-sm"
              onClick={() => setMobileOpen(false)}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
