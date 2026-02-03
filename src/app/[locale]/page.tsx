import Image from "next/image";
import { useTranslations } from "next-intl";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  const tNav = useTranslations("Nav");
  const tBrand = useTranslations("Brand");
  const tHero = useTranslations("Hero");
  const tTrust = useTranslations("Trust");
  const tServices = useTranslations("Services");
  const tPortfolio = useTranslations("Portfolio");
  const tExperience = useTranslations("Experience");
  const tAssurance = useTranslations("Assurance");
  const tContact = useTranslations("Contact");
  const tFooter = useTranslations("Footer");

  const bentoHighlights = [
    {
      title: tTrust("highlights.verified.title"),
      description: tTrust("highlights.verified.description"),
    },
    {
      title: tTrust("highlights.ledger.title"),
      description: tTrust("highlights.ledger.description"),
    },
    {
      title: tTrust("highlights.council.title"),
      description: tTrust("highlights.council.description"),
    },
    {
      title: tTrust("highlights.permits.title"),
      description: tTrust("highlights.permits.description"),
    },
  ];

  const bentoStats = [
    {
      value: "120+",
      label: tTrust("stats.projects"),
    },
    {
      value: "4.9/5",
      label: tTrust("stats.rating"),
    },
    {
      value: "18",
      label: tTrust("stats.neighborhoods"),
    },
    {
      value: "$210M",
      label: tTrust("stats.value"),
    },
  ];

  const bentoServices = [
    {
      title: tServices("items.buySell.title"),
      description: tServices("items.buySell.description"),
    },
    {
      title: tServices("items.newConstruction.title"),
      description: tServices("items.newConstruction.description"),
    },
    {
      title: tServices("items.renovations.title"),
      description: tServices("items.renovations.description"),
    },
    {
      title: tServices("items.propertyCare.title"),
      description: tServices("items.propertyCare.description"),
    },
  ];

  const testimonials = [
    {
      quote: tExperience("testimonials.avery.quote"),
      name: tExperience("testimonials.avery.name"),
      role: tExperience("testimonials.avery.role"),
    },
    {
      quote: tExperience("testimonials.lina.quote"),
      name: tExperience("testimonials.lina.name"),
      role: tExperience("testimonials.lina.role"),
    },
  ];

  const showcaseListings = [
    {
      title: tPortfolio("items.cedar.title"),
      location: tPortfolio("items.cedar.location"),
      price: tPortfolio("items.cedar.price"),
      image: "https://picsum.photos/seed/cedar-court/640/520",
    },
    {
      title: tPortfolio("items.ridgecrest.title"),
      location: tPortfolio("items.ridgecrest.location"),
      price: tPortfolio("items.ridgecrest.price"),
      image: "https://picsum.photos/seed/ridgecrest/640/520",
    },
    {
      title: tPortfolio("items.silverline.title"),
      location: tPortfolio("items.silverline.location"),
      price: tPortfolio("items.silverline.price"),
      image: "https://picsum.photos/seed/silverline/640/520",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-brand-accent">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(193,134,100,0.2),_transparent_55%)]" />
        <div className="absolute -right-10 top-24 h-72 w-72 rounded-full bg-brand-sky/70 blur-3xl" />
        <div className="absolute -left-10 bottom-10 h-64 w-64 rounded-full bg-brand-cypress/60 blur-3xl" />

        <div className="sticky top-0 z-50 border-b border-brand-sand/60 bg-brand-surface/70 backdrop-blur-xl">
          <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-terracotta text-brand-cream font-semibold">
                R
              </div>
              <div>
                <p className="text-lg font-semibold tracking-wide">
                  {tBrand("name")}
                </p>
                <p className="text-sm text-brand-muted">
                  {tBrand("tagline")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden items-center gap-6 text-sm font-medium text-brand-muted md:flex">
                <a className="transition text-brand-accent" href="#services">
                  {tNav("services")}
                </a>
                <a className="transition hover:text-brand-accent" href="#bento">
                  {tNav("trust")}
                </a>
                <a className="transition hover:text-brand-accent" href="#listings">
                  {tNav("portfolio")}
                </a>
                <a className="transition hover:text-brand-accent" href="#contact">
                  {tNav("contact")}
                </a>
              </nav>
              <ThemeToggle />
              <button className="rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                {tNav("schedule")}
              </button>
            </div>
          </header>
        </div>

        <section className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-sand bg-brand-surface/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              {tBrand("badge")}
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              {tHero("title")}
            </h1>
            <p className="text-lg text-brand-muted">{tHero("subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-brand-terracotta px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5">
                {tHero("ctaPrimary")}
              </button>
              <button className="rounded-full border border-brand-sand bg-brand-surface px-6 py-3 text-sm font-semibold text-brand-accent transition hover:border-brand-gold/60">
                {tHero("ctaSecondary")}
              </button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 animate-fade-in">
            <Image
              className="h-56 w-full rounded-3xl object-cover shadow-lg"
              src="https://picsum.photos/seed/hero-estate/640/480"
              alt={tHero("imageAlt1")}
              width={640}
              height={480}
              priority
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
            />
            <Image
              className="h-56 w-full rounded-3xl object-cover shadow-lg sm:mt-10"
              src="https://picsum.photos/seed/hero-interior/640/480"
              alt={tHero("imageAlt2")}
              width={640}
              height={480}
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
            />
            <Image
              className="h-56 w-full rounded-3xl object-cover shadow-lg sm:col-span-2"
              src="https://picsum.photos/seed/hero-build/960/520"
              alt={tHero("imageAlt3")}
              width={960}
              height={520}
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </section>
      </div>

      <section id="bento" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
              {tTrust("eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold">{tTrust("title")}</h2>
          </div>
          <p className="max-w-xl text-brand-muted">{tTrust("subtitle")}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 md:grid-cols-2 animate-stagger">
            {bentoHighlights.map((item) => (
              <div key={item.title} className="rounded-3xl glass p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-brand-muted">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6 rounded-3xl glass-strong p-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                {tTrust("proofEyebrow")}
              </p>
              <h3 className="text-2xl font-semibold">{tTrust("proofTitle")}</h3>
              <p className="mt-2 text-brand-muted">{tTrust("proofSubtitle")}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {bentoStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl glass p-4">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-brand-muted">{stat.label}</p>
                </div>
              ))}
            </div>
            <button className="rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-ink">
              {tTrust("proofCta")}
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="bg-brand-surface-strong/70 py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
                {tServices("eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold">{tServices("title")}</h2>
            </div>
            <p className="max-w-xl text-brand-muted">{tServices("subtitle")}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-stagger">
            {bentoServices.map((service) => (
              <div key={service.title} className="rounded-3xl glass p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-brand-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="listings" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
              {tPortfolio("eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold">{tPortfolio("title")}</h2>
          </div>
          <button className="rounded-full border border-brand-sand bg-brand-surface px-5 py-2 text-sm font-semibold text-brand-accent">
            {tPortfolio("cta")}
          </button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3 animate-stagger">
          {showcaseListings.map((listing) => (
            <article
              key={listing.title}
              className="overflow-hidden rounded-3xl glass shadow-sm"
            >
              <Image
                className="h-56 w-full object-cover"
                src={listing.image}
                alt={listing.title}
                width={640}
                height={520}
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
              />
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold">{listing.title}</h3>
                <p className="text-sm text-brand-muted">{listing.location}</p>
                <p className="text-lg font-semibold text-brand-gold">
                  {listing.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-surface-strong/70 py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
                {tExperience("eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold">{tExperience("title")}</h2>
              <p className="text-brand-muted">{tExperience("subtitle")}</p>
              <div className="grid gap-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="rounded-3xl glass p-6">
                    <p className="text-lg">"{testimonial.quote}"</p>
                    <p className="mt-4 text-sm font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-brand-muted">
                      {testimonial.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl glass p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">{tAssurance("title")}</h3>
              <p className="text-brand-muted">{tAssurance("subtitle")}</p>
              <div className="grid gap-4">
                <div className="rounded-2xl glass-strong p-4 text-sm">
                  <p className="font-semibold">{tAssurance("milestone.title")}</p>
                  <p className="text-brand-muted">
                    {tAssurance("milestone.description")}
                  </p>
                </div>
                <div className="rounded-2xl glass-strong p-4 text-sm">
                  <p className="font-semibold">{tAssurance("schedule.title")}</p>
                  <p className="text-brand-muted">
                    {tAssurance("schedule.description")}
                  </p>
                </div>
                <div className="rounded-2xl glass-strong p-4 text-sm">
                  <p className="font-semibold">{tAssurance("quality.title")}</p>
                  <p className="text-brand-muted">
                    {tAssurance("quality.description")}
                  </p>
                </div>
              </div>
              <button className="rounded-full bg-brand-terracotta px-6 py-3 text-sm font-semibold text-white">
                {tAssurance("cta")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 rounded-3xl glass p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">{tContact("title")}</h2>
            <p className="text-brand-muted">{tContact("subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink">
                {tContact("ctaPrimary")}
              </button>
              <button className="rounded-full border border-brand-sand bg-brand-surface-strong px-6 py-3 text-sm font-semibold text-brand-accent">
                {tContact("ctaSecondary")}
              </button>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl glass-strong p-6 shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                {tContact("contactEyebrow")}
              </p>
              <p className="mt-2 text-lg font-semibold">hello@rnewxrealty.com</p>
              <p className="text-brand-muted">(555) 214-9860</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                {tContact("studioEyebrow")}
              </p>
              <p className="text-brand-muted">246 Cedar Lane, Suite 200</p>
              <p className="text-brand-muted">Austin, TX 78701</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-sand bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-brand-muted md:flex-row md:items-center md:justify-between">
          <p>{tFooter("rights")}</p>
          <div className="flex flex-wrap gap-6">
            <a className="hover:text-brand-accent" href="#services">
              {tFooter("services")}
            </a>
            <a className="hover:text-brand-accent" href="#bento">
              {tFooter("trust")}
            </a>
            <a className="hover:text-brand-accent" href="#listings">
              {tFooter("portfolio")}
            </a>
            <a className="hover:text-brand-accent" href="#contact">
              {tFooter("contact")}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
