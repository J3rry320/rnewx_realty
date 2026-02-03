import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Hammer,
  Layers,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";
import FeatureCard from "@/app/components/FeatureCard";
import StatCard from "@/app/components/StatCard";
import StepCard from "@/app/components/StepCard";
import { Link } from "@/i18n/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: t("construction.title"),
    description: t("construction.description"),
  };
}

export default function ConstructionPage() {
  const t = useTranslations("Construction");

  const featureCards = [
    {
      title: t("features.design.title"),
      description: t("features.design.description"),
      icon: <Sparkles className="h-5 w-5" aria-hidden />,
    },
    {
      title: t("features.partners.title"),
      description: t("features.partners.description"),
      icon: <ShieldCheck className="h-5 w-5" aria-hidden />,
    },
    {
      title: t("features.timeline.title"),
      description: t("features.timeline.description"),
      icon: <Timer className="h-5 w-5" aria-hidden />,
    },
    {
      title: t("features.quality.title"),
      description: t("features.quality.description"),
      icon: <ClipboardCheck className="h-5 w-5" aria-hidden />,
    },
  ];

  const steps = [
    {
      title: t("steps.discovery.title"),
      description: t("steps.discovery.description"),
      icon: <Building2 className="h-5 w-5" aria-hidden />,
    },
    {
      title: t("steps.planning.title"),
      description: t("steps.planning.description"),
      icon: <Layers className="h-5 w-5" aria-hidden />,
    },
    {
      title: t("steps.build.title"),
      description: t("steps.build.description"),
      icon: <Hammer className="h-5 w-5" aria-hidden />,
    },
  ];

  const stats = [
    {
      label: t("stats.active.label"),
      value: t("stats.active.value"),
      icon: <Building2 className="h-4 w-4" aria-hidden />,
    },
    {
      label: t("stats.turnaround.label"),
      value: t("stats.turnaround.value"),
      icon: <Timer className="h-4 w-4" aria-hidden />,
    },
    {
      label: t("stats.satisfaction.label"),
      value: t("stats.satisfaction.value"),
      icon: <Sparkles className="h-4 w-4" aria-hidden />,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-brand-accent">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(193,134,100,0.2),_transparent_55%)]" />
        <div className="absolute -right-16 top-24 h-72 w-72 rounded-full bg-brand-sky/70 blur-3xl" />
        <div className="absolute -left-10 bottom-10 h-64 w-64 rounded-full bg-brand-cypress/60 blur-3xl" />

        <section className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-sand bg-brand-surface/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              {t("hero.badge")}
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-brand-muted">{t("hero.subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-brand-terracotta px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                href="/construction/request"
              >
                {t("hero.ctaPrimary")}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <button className="rounded-full border border-brand-sand bg-brand-surface px-6 py-3 text-sm font-semibold text-brand-accent transition hover:border-brand-gold/60">
                {t("hero.ctaSecondary")}
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Image
              className="h-52 w-full rounded-3xl object-cover shadow-lg"
              src="https://picsum.photos/seed/new-build-exterior/640/480"
              alt={t("hero.imageAlt1")}
              width={640}
              height={480}
              priority
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
            />
            <Image
              className="h-52 w-full rounded-3xl object-cover shadow-lg sm:mt-10"
              src="https://picsum.photos/seed/new-build-interior/640/480"
              alt={t("hero.imageAlt2")}
              width={640}
              height={480}
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
            />
            <Image
              className="h-56 w-full rounded-3xl object-cover shadow-lg sm:col-span-2"
              src="https://picsum.photos/seed/new-build-progress/960/520"
              alt={t("hero.imageAlt3")}
              width={960}
              height={520}
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </section>
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow={t("features.eyebrow")}
          title={t("features.title")}
          subtitle={t("features.subtitle")}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featureCards.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="bg-brand-surface-strong/70 py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeader
            eyebrow={t("process.eyebrow")}
            title={t("process.title")}
            subtitle={t("process.subtitle")}
            action={
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-brand-sand bg-brand-surface px-5 py-2 text-sm font-semibold text-brand-accent transition hover:border-brand-gold/60"
                href="/construction/request"
              >
                {t("process.cta")}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            }
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                step={index + 1}
                label={t("process.stepLabel")}
                {...step}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-8 rounded-3xl glass p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
              {t("cta.eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold">{t("cta.title")}</h2>
            <p className="text-brand-muted">{t("cta.subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-brand-terracotta px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                href="/construction/request"
              >
                {t("cta.primary")}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <button className="rounded-full border border-brand-sand bg-brand-surface px-6 py-3 text-sm font-semibold text-brand-accent">
                {t("cta.secondary")}
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-brand-surface-strong/80 p-6">
            <div className="flex items-center gap-3 text-brand-gold">
              <Sparkles className="h-5 w-5" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                {t("cta.card.eyebrow")}
              </p>
            </div>
            <p className="mt-4 text-lg font-semibold text-brand-accent">
              {t("cta.card.title")}
            </p>
            <p className="mt-3 text-sm text-brand-muted">
              {t("cta.card.subtitle")}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
