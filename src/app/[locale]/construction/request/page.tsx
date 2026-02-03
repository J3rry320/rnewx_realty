"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Home,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import Stepper from "@/app/components/Stepper";
import FormField from "@/app/components/FormField";
import FormSelect from "@/app/components/FormSelect";
import FormTextarea from "@/app/components/FormTextarea";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const STEP_KEYS = ["contact", "plot", "design", "timeline", "review"] as const;

type StepKey = (typeof STEP_KEYS)[number];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  plotCity: string;
  plotStatus: string;
  plotSize: string;
  homeStyle: string;
  bedrooms: string;
  bathrooms: string;
  budget: string;
  targetStart: string;
  notes: string;
};

const defaultState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  plotCity: "",
  plotStatus: "owned",
  plotSize: "",
  homeStyle: "modern",
  bedrooms: "3",
  bathrooms: "2",
  budget: "",
  targetStart: "",
  notes: "",
};

export default function ConstructionRequestPage() {
  const t = useTranslations("ConstructionRequest");
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState<FormState>(defaultState);

  const stepKey = STEP_KEYS[stepIndex];

  const steps = useMemo(
    () => [
      {
        title: t("steps.contact.title"),
        description: t("steps.contact.description"),
      },
      {
        title: t("steps.plot.title"),
        description: t("steps.plot.description"),
      },
      {
        title: t("steps.design.title"),
        description: t("steps.design.description"),
      },
      {
        title: t("steps.timeline.title"),
        description: t("steps.timeline.description"),
      },
      {
        title: t("steps.review.title"),
        description: t("steps.review.description"),
      },
    ],
    [t]
  );

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => setStepIndex((prev) => Math.min(prev + 1, STEP_KEYS.length - 1));
  const back = () => setStepIndex((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    next();
  };

  return (
    <div className="min-h-screen bg-background text-brand-accent">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(193,134,100,0.2),_transparent_55%)]" />
        <div className="absolute -left-16 top-32 h-72 w-72 rounded-full bg-brand-sky/70 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-brand-cypress/60 blur-3xl" />

        <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-sand bg-brand-surface/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                {t("badge")}
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
                {t("title")}
              </h1>
              <p className="text-lg text-brand-muted">{t("subtitle")}</p>
              <Stepper items={steps} activeIndex={stepIndex} ariaLabel={t("progressAria")} />
              <div className="rounded-3xl glass p-6 shadow-sm">
                <div className="flex items-center gap-3 text-brand-gold">
                  <CheckCircle2 className="h-5 w-5" aria-hidden />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    {t("trust.title")}
                  </p>
                </div>
                <p className="mt-4 text-sm text-brand-muted">{t("trust.subtitle")}</p>
              </div>
            </div>

            <div className="rounded-3xl glass p-8 shadow-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                    {t(`stepTitles.${stepKey}`)}
                  </p>
                  <h2 className="text-2xl font-semibold">{t(`stepHeadings.${stepKey}`)}</h2>
                  <p className="text-sm text-brand-muted">{t(`stepHelper.${stepKey}`)}</p>
                </div>

                {stepKey === "contact" ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      id="fullName"
                      label={t("fields.fullName")}
                      placeholder={t("placeholders.fullName")}
                      value={form.fullName}
                      onChange={(event) => updateField("fullName", event.target.value)}
                      required
                    />
                    <FormField
                      id="email"
                      type="email"
                      label={t("fields.email")}
                      placeholder={t("placeholders.email")}
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      required
                    />
                    <FormField
                      id="phone"
                      type="tel"
                      label={t("fields.phone")}
                      placeholder={t("placeholders.phone")}
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      required
                    />
                    <FormField
                      id="city"
                      label={t("fields.city")}
                      placeholder={t("placeholders.city")}
                      value={form.city}
                      onChange={(event) => updateField("city", event.target.value)}
                    />
                  </div>
                ) : null}

                {stepKey === "plot" ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormSelect
                      id="plotStatus"
                      label={t("fields.plotStatus")}
                      value={form.plotStatus}
                      onChange={(event) => updateField("plotStatus", event.target.value)}
                    >
                      <option value="owned">{t("options.plotStatus.owned")}</option>
                      <option value="searching">{t("options.plotStatus.searching")}</option>
                      <option value="listing">{t("options.plotStatus.listing")}</option>
                    </FormSelect>
                    <FormField
                      id="plotSize"
                      label={t("fields.plotSize")}
                      placeholder={t("placeholders.plotSize")}
                      value={form.plotSize}
                      onChange={(event) => updateField("plotSize", event.target.value)}
                    />
                    <FormField
                      id="plotCity"
                      label={t("fields.plotCity")}
                      placeholder={t("placeholders.plotCity")}
                      value={form.plotCity}
                      onChange={(event) => updateField("plotCity", event.target.value)}
                    />
                  </div>
                ) : null}

                {stepKey === "design" ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormSelect
                      id="homeStyle"
                      label={t("fields.homeStyle")}
                      value={form.homeStyle}
                      onChange={(event) => updateField("homeStyle", event.target.value)}
                    >
                      <option value="modern">{t("options.homeStyle.modern")}</option>
                      <option value="classic">{t("options.homeStyle.classic")}</option>
                      <option value="scandinavian">{t("options.homeStyle.scandinavian")}</option>
                      <option value="custom">{t("options.homeStyle.custom")}</option>
                    </FormSelect>
                    <FormSelect
                      id="bedrooms"
                      label={t("fields.bedrooms")}
                      value={form.bedrooms}
                      onChange={(event) => updateField("bedrooms", event.target.value)}
                    >
                      {Array.from({ length: 6 }).map((_, index) => {
                        const value = String(index + 1);
                        return (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        );
                      })}
                    </FormSelect>
                    <FormSelect
                      id="bathrooms"
                      label={t("fields.bathrooms")}
                      value={form.bathrooms}
                      onChange={(event) => updateField("bathrooms", event.target.value)}
                    >
                      {Array.from({ length: 5 }).map((_, index) => {
                        const value = String(index + 1);
                        return (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        );
                      })}
                    </FormSelect>
                    <FormField
                      id="budget"
                      label={t("fields.budget")}
                      placeholder={t("placeholders.budget")}
                      value={form.budget}
                      onChange={(event) => updateField("budget", event.target.value)}
                    />
                    <FormTextarea
                      id="notes"
                      label={t("fields.notes")}
                      placeholder={t("placeholders.notes")}
                      value={form.notes}
                      onChange={(event) => updateField("notes", event.target.value)}
                      className="md:col-span-2"
                      rows={4}
                    />
                  </div>
                ) : null}

                {stepKey === "timeline" ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      id="targetStart"
                      type="date"
                      label={t("fields.targetStart")}
                      value={form.targetStart}
                      onChange={(event) => updateField("targetStart", event.target.value)}
                    />
                    <FormField
                      id="budgetTimeline"
                      label={t("fields.timelineBudget")}
                      placeholder={t("placeholders.timelineBudget")}
                      value={form.budget}
                      onChange={(event) => updateField("budget", event.target.value)}
                    />
                  </div>
                ) : null}

                {stepKey === "review" ? (
                  <div className="space-y-6">
                    <div className="grid gap-4 rounded-3xl bg-brand-surface-strong/70 p-6 md:grid-cols-2">
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-brand-gold" aria-hidden />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">
                            {t("review.contact")}
                          </p>
                          <p className="text-sm font-semibold text-brand-accent">
                            {form.fullName || t("review.placeholder")}
                          </p>
                          <p className="text-xs text-brand-muted">{form.email || "-"}</p>
                          <p className="text-xs text-brand-muted">{form.phone || "-"}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-brand-gold" aria-hidden />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">
                            {t("review.plot")}
                          </p>
                          <p className="text-sm font-semibold text-brand-accent">
                            {form.plotCity || form.city || t("review.placeholder")}
                          </p>
                          <p className="text-xs text-brand-muted">{form.plotSize || "-"}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="h-5 w-5 text-brand-gold" aria-hidden />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">
                            {t("review.design")}
                          </p>
                          <p className="text-sm font-semibold text-brand-accent">
                            {t(`options.homeStyle.${form.homeStyle}`)}
                          </p>
                          <p className="text-xs text-brand-muted">
                            {t("review.bedsBaths", {
                              beds: form.bedrooms,
                              baths: form.bathrooms,
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <CalendarDays className="h-5 w-5 text-brand-gold" aria-hidden />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">
                            {t("review.timeline")}
                          </p>
                          <p className="text-sm font-semibold text-brand-accent">
                            {form.targetStart || t("review.placeholder")}
                          </p>
                          <p className="text-xs text-brand-muted">{form.budget || "-"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-brand-sand bg-brand-surface px-6 py-4 text-sm text-brand-muted">
                      {t("review.note")}
                    </div>
                  </div>
                ) : null}

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-sand bg-brand-surface px-5 py-2 text-sm font-semibold text-brand-accent transition hover:border-brand-gold/60"
                    onClick={back}
                    disabled={stepIndex === 0}
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden />
                    {t("actions.back")}
                  </button>

                  {stepKey === "review" ? (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-terracotta px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                    >
                      {t("actions.submit")}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-terracotta px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                    >
                      {t("actions.next")}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl glass p-8 shadow-sm">
              <div className="flex items-center gap-3 text-brand-gold">
                <Phone className="h-5 w-5" aria-hidden />
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  {t("support.eyebrow")}
                </p>
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{t("support.title")}</h3>
              <p className="mt-3 text-sm text-brand-muted">{t("support.subtitle")}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button className="rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-ink">
                  {t("support.primary")}
                </button>
                <button className="rounded-full border border-brand-sand bg-brand-surface px-5 py-2 text-sm font-semibold text-brand-accent">
                  {t("support.secondary")}
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                className="h-full w-full object-cover"
                src="https://picsum.photos/seed/construction-request/720/720"
                alt={t("support.imageAlt")}
                width={720}
                height={720}
                sizes="(min-width: 1024px) 360px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
