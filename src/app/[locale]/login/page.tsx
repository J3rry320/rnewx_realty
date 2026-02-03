"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { getFirebaseAuth } from "@/lib/auth/firebaseClient";
import { useUser } from "@/lib/auth/UserContext";

export default function LoginPage() {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") ?? `/${locale}`;
  const { refresh } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const exchangeSession = async (idToken: string) => {
    const response = await fetch("/api/auth/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ idToken }),
    });

    if (!response.ok) {
      throw new Error("SESSION_EXCHANGE_FAILED");
    }
  };

  const handleEmailSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const auth = getFirebaseAuth();
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken(true);
      await exchangeSession(token);
      await refresh();
      router.push(redirectTo);
    } catch {
      setError(t("error"));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);

    try {
      const auth = getFirebaseAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken(true);
      await exchangeSession(token);
      await refresh();
      router.push(redirectTo);
    } catch {
      setError(t("error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-brand-accent">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(193,134,100,0.2),_transparent_55%)]" />
        <div className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-brand-sky/70 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-brand-cypress/60 blur-3xl" />

        <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-20">
          <div className="grid w-full gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-sand bg-brand-surface/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                {t("badge")}
              </div>
              <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
                {t("title")}
              </h1>
              <p className="text-lg text-brand-muted">{t("subtitle")}</p>
              <p className="text-sm text-brand-muted">{t("helper")}</p>
            </div>

            <div className="rounded-3xl glass p-8 shadow-sm">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">{t("formTitle")}</h2>
                <p className="text-sm text-brand-muted">{t("formSubtitle")}</p>
              </div>

              <form className="mt-6 space-y-5" onSubmit={handleEmailSignIn}>
                <div className="space-y-2">
                  <label className="text-sm font-semibold" htmlFor="email">
                    {t("emailLabel")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={t("emailPlaceholder")}
                    className="w-full rounded-2xl border border-brand-sand bg-brand-surface-strong px-4 py-3 text-sm text-brand-accent placeholder:text-brand-muted focus:border-brand-gold focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold" htmlFor="password">
                    {t("passwordLabel")}
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder={t("passwordPlaceholder")}
                    className="w-full rounded-2xl border border-brand-sand bg-brand-surface-strong px-4 py-3 text-sm text-brand-accent placeholder:text-brand-muted focus:border-brand-gold focus:outline-none"
                  />
                </div>

                {error ? (
                  <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-brand-terracotta px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? t("loading") : t("submit")}
                </button>

                <div className="flex items-center gap-3 text-xs text-brand-muted">
                  <span className="h-px flex-1 bg-brand-sand" />
                  {t("divider")}
                  <span className="h-px flex-1 bg-brand-sand" />
                </div>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full rounded-full border border-brand-sand bg-brand-surface px-5 py-3 text-sm font-semibold text-brand-accent transition hover:border-brand-gold/60 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {t("google")}
                </button>
              </form>

              <p className="mt-6 text-xs text-brand-muted">{t("note")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
