import ThemeToggle from "./components/ThemeToggle";

const bentoHighlights = [
  {
    title: "Verified Build Partners",
    description:
      "Every contractor is vetted for licensing, insurance, and past performance before joining our network.",
  },
  {
    title: "Transparent Project Ledger",
    description:
      "Track costs, milestones, and selections in one dashboard with no surprise change orders.",
  },
  {
    title: "Design Review Council",
    description:
      "Architects and planners review each project to protect neighborhood integrity and resale value.",
  },
  {
    title: "Permits Managed",
    description:
      "We coordinate city approvals and inspections, keeping your timeline on track.",
  },
];

const bentoStats = [
  {
    title: "120+",
    description: "Projects delivered",
  },
  {
    title: "4.9/5",
    description: "Client rating",
  },
  {
    title: "18",
    description: "Neighborhoods served",
  },
  {
    title: "$210M",
    description: "Total builds managed",
  },
];

const bentoServices = [
  {
    title: "Buy & Sell",
    description:
      "Market analysis, pricing strategy, and elevated marketing for buyers and sellers.",
  },
  {
    title: "New Construction",
    description:
      "Select from curated floorplans or create a custom build with our design studio.",
  },
  {
    title: "Renovations",
    description:
      "Thoughtful upgrades to preserve character while improving performance and comfort.",
  },
  {
    title: "Property Care",
    description:
      "Ongoing management, leasing, and preventative maintenance programs.",
  },
];

const bentoTestimonials = [
  {
    quote:
      "Rnewx delivered weekly transparency and zero surprises. We felt confident at every decision point.",
    name: "Avery Sutton",
    role: "Custom Build Client",
  },
  {
    quote:
      "Their renovation process protected the home’s character while dramatically improving the layout.",
    name: "Lina Cho",
    role: "Renovation Client",
  },
];

const showcaseListings = [
  {
    title: "Cedar Court Residences",
    location: "Austin, TX",
    price: "$1.2M",
    image: "https://picsum.photos/seed/cedar-court/640/520",
  },
  {
    title: "Ridgecrest Renovation",
    location: "Boulder, CO",
    price: "$680K",
    image: "https://picsum.photos/seed/ridgecrest/640/520",
  },
  {
    title: "Silverline Townhomes",
    location: "Raleigh, NC",
    price: "$890K",
    image: "https://picsum.photos/seed/silverline/640/520",
  },
];

export default function Home() {
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
                <p className="text-lg font-semibold tracking-wide">Rnewx Realty</p>
                <p className="text-sm text-brand-muted">Trust-first development</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden items-center gap-6 text-sm font-medium text-brand-muted md:flex">
                <a className="transition text-brand-accent" href="#services">
                  Services
                </a>
                <a className="transition hover:text-brand-accent" href="#bento">
                  Trust
                </a>
                <a className="transition hover:text-brand-accent" href="#listings">
                  Portfolio
                </a>
                <a className="transition hover:text-brand-accent" href="#contact">
                  Contact
                </a>
              </nav>
              <ThemeToggle />
              <button className="rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                Schedule a Call
              </button>
            </div>
          </header>
        </div>

        <section className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-sand bg-brand-surface/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Rnewx Development Collective
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              A calm, transparent path to buy, build, or renovate with confidence.
            </h1>
            <p className="text-lg text-brand-muted">
              We combine real estate advisory, vetted builders, and project accountability to create trust at every milestone.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-brand-terracotta px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5">
                Explore opportunities
              </button>
              <button className="rounded-full border border-brand-sand bg-brand-surface px-6 py-3 text-sm font-semibold text-brand-accent transition hover:border-brand-gold/60">
                Download trust guide
              </button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 animate-fade-in">
            <img
              className="h-56 w-full rounded-3xl object-cover shadow-lg"
              src="https://picsum.photos/seed/hero-estate/640/480"
              alt="Luxury estate exterior"
            />
            <img
              className="h-56 w-full rounded-3xl object-cover shadow-lg sm:mt-10"
              src="https://picsum.photos/seed/hero-interior/640/480"
              alt="Refined interior living room"
            />
            <img
              className="h-56 w-full rounded-3xl object-cover shadow-lg sm:col-span-2"
              src="https://picsum.photos/seed/hero-build/960/520"
              alt="Custom build in progress"
            />
          </div>
        </section>
      </div>

      <section id="bento" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Trust framework
            </p>
            <h2 className="text-3xl font-semibold">Built to protect your investment</h2>
          </div>
          <p className="max-w-xl text-brand-muted">
            Every step is documented, every partner is vetted, and every decision is guided by experienced advisors.
          </p>
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
                Market proof
              </p>
              <h3 className="text-2xl font-semibold">A track record backed by data</h3>
              <p className="mt-2 text-brand-muted">
                We earn trust by delivering measurable outcomes and transparent reporting.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {bentoStats.map((stat) => (
                <div key={stat.title} className="rounded-2xl glass p-4">
                  <p className="text-2xl font-semibold">{stat.title}</p>
                  <p className="text-sm text-brand-muted">{stat.description}</p>
                </div>
              ))}
            </div>
            <button className="rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-ink">
              View reporting sample
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="bg-brand-surface-strong/70 py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
                Services
              </p>
              <h2 className="text-3xl font-semibold">One studio for every stage</h2>
            </div>
            <p className="max-w-xl text-brand-muted">
              We guide buyers, sellers, and property owners with the same disciplined process for every project.
            </p>
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
              Portfolio
            </p>
            <h2 className="text-3xl font-semibold">Recent builds and renovations</h2>
          </div>
          <button className="rounded-full border border-brand-sand bg-brand-surface px-5 py-2 text-sm font-semibold text-brand-accent">
            View full portfolio
          </button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3 animate-stagger">
          {showcaseListings.map((listing) => (
            <article
              key={listing.title}
              className="overflow-hidden rounded-3xl glass shadow-sm"
            >
              <img
                className="h-56 w-full object-cover"
                src={listing.image}
                alt={listing.title}
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
                Client experience
              </p>
              <h2 className="text-3xl font-semibold">High-touch, low-stress delivery</h2>
              <p className="text-brand-muted">
                We run a steady communication cadence and keep all teams accountable to the same timeline.
              </p>
              <div className="grid gap-4">
                {bentoTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="rounded-3xl glass p-6"
                  >
                    <p className="text-lg">"{testimonial.quote}"</p>
                    <p className="mt-4 text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-brand-muted">{testimonial.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl glass p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">Project assurance plan</h3>
              <p className="text-brand-muted">
                Weekly updates, documented approvals, and a dedicated project lead for every build or renovation.
              </p>
              <div className="grid gap-4">
                <div className="rounded-2xl glass-strong p-4 text-sm">
                  <p className="font-semibold">Milestone reporting</p>
                  <p className="text-brand-muted">Photos, budget status, and approvals.</p>
                </div>
                <div className="rounded-2xl glass-strong p-4 text-sm">
                  <p className="font-semibold">Schedule protection</p>
                  <p className="text-brand-muted">Buffer planning for permits and inspections.</p>
                </div>
                <div className="rounded-2xl glass-strong p-4 text-sm">
                  <p className="font-semibold">Quality walkthroughs</p>
                  <p className="text-brand-muted">Final inspection with punch-list follow up.</p>
                </div>
              </div>
              <button className="rounded-full bg-brand-terracotta px-6 py-3 text-sm font-semibold text-white">
                Request a project plan
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 rounded-3xl glass p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Let’s design your next move</h2>
            <p className="text-brand-muted">
              Schedule a private consultation to review listings, discuss new construction, or outline a renovation roadmap.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink">
                Book consultation
              </button>
              <button className="rounded-full border border-brand-sand bg-brand-surface-strong px-6 py-3 text-sm font-semibold text-brand-accent">
                Download service guide
              </button>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl glass-strong p-6 shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Contact
              </p>
              <p className="mt-2 text-lg font-semibold">hello@rnewxrealty.com</p>
              <p className="text-brand-muted">(555) 214-9860</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Studio
              </p>
              <p className="text-brand-muted">246 Cedar Lane, Suite 200</p>
              <p className="text-brand-muted">Austin, TX 78701</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-sand bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-brand-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 Rnewx Realty. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a className="hover:text-brand-accent" href="#services">
              Services
            </a>
            <a className="hover:text-brand-accent" href="#bento">
              Trust
            </a>
            <a className="hover:text-brand-accent" href="#listings">
              Portfolio
            </a>
            <a className="hover:text-brand-accent" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
