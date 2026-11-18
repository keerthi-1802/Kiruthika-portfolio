// admin.jsx
import { useEffect } from "react";
import dashboard from "../assets/admin/dashboard.png";
import events from "../assets/admin/event.png";
import galleries from "../assets/admin/gallery.png";
import documents from "../assets/admin/document.png";
import themes from "../assets/admin/theme.png";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Instrument+Sans:wght@400;500;600&display=swap";

const display = { fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" };
const body = { fontFamily: "'Instrument Sans', ui-sans-serif, system-ui, sans-serif" };

/* ---------- Content ---------- */

const META = [
  { label: "Role", value: "Full-stack developer" },
  { label: "Client", value: "Tamil Nadu Association in Norway" },
  { label: "Timeline", value: "[Start] – [End]" },
  { label: "Status", value: "Live in production" },
];

const OVERVIEW =
  "The admin panel behind the TANAN website. TANAN (Tamil Nadu Association in Norway) is a community organization that brings people together through Tamil culture, heritage and shared experiences in Norway. The panel gives the team a structured way to maintain the content on the public website, so it can be updated without touching code.";

const CHALLENGE =
  "The website brings together organizational information, Tamil Nadu and Norway content, events, galleries and community material. Keeping that content current needed a practical administrative workflow. The challenge was to make the admin approachable for people who are not developers, while keeping each content area clearly separated and consistent with the public site.";

const GOALS = [
  "Give administrators a structured workflow for each type of content",
  "Make content easy to find and update",
  "Keep each administrative task in its own clearly defined area",
  "Show storage usage so the team can see how close they are to the plan",
  "Let the team change the public site's theme without a developer",
];

const MY_ROLE =
  "I built the admin panel as a full-stack developer: the React interface, the Express API, and the MySQL data model that connects it to the public website. I worked on how the modules are grouped, how each content area is laid out, and how a change made in the admin reaches the live site.";

const MODULES = [
  {
    title: "Dashboard",
    image: dashboard,
    alt: "Admin dashboard showing storage usage by module",
    text: "The starting point of the panel. It shows storage use for each module against the 18 GB plan, so the team can see how much space is left.",
    features: ["Storage usage per module", "Share of total usage", "Total against the plan"],
  },
  {
    title: "Events",
    image: events,
    alt: "Events table with status, location and tags",
    text: "Upcoming and completed events in one table. Admins add an event once, and it appears on the public site with its date, location and tags.",
    features: ["Search and month filter", "Upcoming and Completed status", "Linked galleries and tags"],
  },
  {
    title: "Galleries",
    image: galleries,
    alt: "Galleries list with thumbnails and image counts",
    text: "Photo collections linked to events. Each gallery keeps its photos, description and event date together.",
    features: ["Filter by year", "Image count per gallery", "Create, edit and delete"],
  },
  {
    title: "Documents",
    image: documents,
    alt: "Documents page with category tabs",
    text: "Official PDFs and titled information entries, split across six categories so each document is easy to find.",
    features: ["Six categories", "Upload, view and download PDFs", "Titled information entries"],
  },
  {
    title: "Themes",
    image: themes,
    alt: "Website themes page with hero animation options",
    text: "Controls the look of the public website. Two themes with hero animation options, and one theme active at a time.",
    features: ["Theme selection", "Hero animation options", "Apply to the live site"],
  },
];

const STACK_LAYERS = [
  { layer: "Frontend", tools: ["React", "Vite", "Tailwind CSS"], note: "Admin panel and public website as two separate apps." },
  { layer: "API", tools: ["Node.js", "Express"], note: "One shared REST API used by both frontends." },
  { layer: "Database", tools: ["MySQL"], note: "Events, galleries, documents and theme settings." },
  { layer: "Hosting", tools: ["Domeneshop", "AWS Lightsail"], note: "Frontend on Domeneshop, backend on AWS Lightsail." },
];

const DECISIONS = [
  {
    title: "Structure before decoration",
    text: "I organized the modules and their tasks before refining the visual style, so each area has a clear purpose.",
  },
  {
    title: "Reusable patterns",
    text: "The same table, card and status components are used across the modules, so the panel behaves consistently.",
  },
  {
    title: "Clear separation of tasks",
    text: "Each content type has its own module, so editing a gallery never means searching through event data.",
  },
];

const BENEFITS = [
  {
    title: "Update without code",
    text: "Volunteers publish events, galleries, documents and theme changes from the panel, without asking a developer.",
  },
  {
    title: "Everything in one place",
    text: "Events, photos, PDFs and theme settings are managed from one interface, so nothing is scattered across folders or files.",
  },
  {
    title: "Find things quickly",
    text: "Search, month filters, year filters and category tabs help admins locate an item in seconds.",
  },
  {
    title: "Clear space usage",
    text: "The dashboard shows how much storage each area uses, so the team can plan before reaching the limit.",
  },
  {
    title: "Changes go live",
    text: "Because both apps share one API and database, an update in the panel appears on the public website.",
  },
  {
    title: "Less risk of mistakes",
    text: "Each content type has its own module with a consistent layout, so editors know where to make a change.",
  },
];

/* ---------- Helpers ---------- */

function useGoogleFonts() {
  useEffect(() => {
    const id = "tanan-admin-fonts";
    if (document.getElementById(id)) return;
    const pre = document.createElement("link");
    pre.rel = "preconnect";
    pre.href = "https://fonts.gstatic.com";
    pre.crossOrigin = "anonymous";
    document.head.appendChild(pre);
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = FONT_URL;
    document.head.appendChild(link);
  }, []);
}

function HomeButton() {
  return (
    <a
      href="/"
      aria-label="Back to home"
      style={body}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-[#e4e0d8] bg-[#191919] py-3 pl-3 pr-5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(25,25,25,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#800020] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#800020] motion-reduce:transition-none"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white/20">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10v10h14V10" />
        </svg>
      </span>
      Home
    </a>
  );
}

function Label({ children }) {
  return (
    <p style={body} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#800020]">
      {children}
    </p>
  );
}

function SectionHeading({ number, label, title }) {
  return (
    <div className="mb-10">
      <Label>
        {number} · {label}
      </Label>
      <h2 style={display} className="mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

/* Desktop: overlapping stack of screenshots. Mobile: simple grid. */
function StackCollage() {
  const layers = [
    { m: MODULES[0], className: "left-0 top-0 w-[68%] z-10" },
    { m: MODULES[1], className: "right-0 top-[10%] w-[62%] z-20" },
    { m: MODULES[2], className: "left-[8%] top-[38%] w-[60%] z-30" },
    { m: MODULES[3], className: "right-[4%] top-[52%] w-[58%] z-40" },
    { m: MODULES[4], className: "left-[22%] top-[70%] w-[62%] z-50" },
  ];

  return (
    <>
      <div className="relative hidden h-[460px] lg:block">
        {layers.map(({ m, className }) => (
          <div
            key={m.title}
            className={`absolute overflow-hidden rounded-lg border border-[#e4e0d8] bg-white shadow-[0_18px_40px_-18px_rgba(25,25,25,0.35)] ${className}`}
          >
            <img src={m.image} alt={m.alt} loading="lazy" className="block h-auto w-full" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 lg:hidden">
        {MODULES.map((m) => (
          <div key={m.title} className="overflow-hidden rounded-lg border border-[#e4e0d8] bg-white">
            <img src={m.image} alt={m.alt} loading="lazy" className="block h-auto w-full" />
          </div>
        ))}
      </div>
    </>
  );
}

function ApiFlow() {
  const node = "rounded-lg border border-[#e4e0d8] bg-white px-5 py-4 text-center text-sm font-semibold";
  return (
    <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
      <div className={node}>
        Admin panel
        <span className="mt-1 block text-xs font-normal text-[#5f5b54]">React</span>
      </div>
      <span className="hidden text-[#800020] md:block">→</span>
      <div className="rounded-lg border-2 border-[#800020] bg-white px-5 py-4 text-center text-sm font-semibold">
        Shared API
        <span className="mt-1 block text-xs font-normal text-[#5f5b54]">Node.js · Express</span>
      </div>
      <span className="hidden text-[#800020] md:block">→</span>
      <div className={node}>
        Database
        <span className="mt-1 block text-xs font-normal text-[#5f5b54]">MySQL</span>
      </div>
      <div className="md:col-span-5 md:-mt-1 md:flex md:justify-center">
        <span className="text-xs text-[#5f5b54]">↑ The public website reads from the same API</span>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function AdminPanelCaseStudy() {
  useGoogleFonts();

  return (
    <div style={body} className="min-h-screen bg-[#faf9f6] text-[#191919]">
      <HomeButton />

      <main className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* 01 Overview */}
        <header className="grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Label>Case study · 01 Overview</Label>
            <h1 style={display} className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              A content management panel for a community organization.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#5f5b54]">{OVERVIEW}</p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#e4e0d8] pt-6 text-sm">
              {META.map((m) => (
                <div key={m.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5b54]">{m.label}</dt>
                  <dd className="mt-1 font-medium">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <StackCollage />
        </header>

        {/* 02 Challenge */}
        <section className="grid gap-10 border-t border-[#e4e0d8] py-16 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading number="02" label="Challenge" title="Content needed a practical workflow" />
          <p className="text-base leading-8 text-[#5f5b54]">{CHALLENGE}</p>
        </section>

        {/* 03 Goals */}
        <section className="grid gap-10 border-t border-[#e4e0d8] py-16 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading number="03" label="Goals" title="What the panel needed to do" />
          <ul className="divide-y divide-[#e4e0d8] border-y border-[#e4e0d8]">
            {GOALS.map((g) => (
              <li key={g} className="py-4 text-base leading-7">
                {g}
              </li>
            ))}
          </ul>
        </section>

        {/* 04 My role */}
        <section className="grid gap-10 border-t border-[#e4e0d8] py-16 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading number="04" label="My role" title="Full-stack developer" />
          <p className="text-base leading-8 text-[#5f5b54]">{MY_ROLE}</p>
        </section>

        {/* 05 Modules (text only) */}
        <section className="border-t border-[#e4e0d8] py-16">
          <SectionHeading number="05" label="Modules" title="Five modules, one panel" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m, i) => (
              <article key={m.title} className="rounded-xl border border-[#e4e0d8] bg-white p-6">
                <p style={body} className="text-xs font-semibold text-[#800020]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 style={display} className="mt-2 text-xl font-bold">{m.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5f5b54]">{m.text}</p>
                <ul className="mt-5 space-y-2 border-t border-[#e4e0d8] pt-4 text-sm">
                  {m.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#800020]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* 06 Architecture (one API) */}
        <section className="border-t border-[#e4e0d8] py-16">
          <SectionHeading number="06" label="Architecture" title="One API, two frontends" />
          <div className="rounded-xl border border-[#e4e0d8] bg-white p-8">
            <ApiFlow />
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-[#e4e0d8] bg-white">
            {STACK_LAYERS.map((s, i) => (
              <div
                key={s.layer}
                className={`grid gap-4 p-5 md:grid-cols-[160px_1fr_1.4fr] md:items-center ${
                  i > 0 ? "border-t border-[#e4e0d8]" : ""
                }`}
              >
                <p style={display} className="text-base font-bold">{s.layer}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[#e4e0d8] bg-[#faf9f6] px-2.5 py-1 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-6 text-[#5f5b54]">{s.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 07 Key design decisions */}
        <section className="border-t border-[#e4e0d8] py-16">
          <SectionHeading number="07" label="Decisions" title="Key design decisions" />
          <div className="grid gap-6 md:grid-cols-3">
            {DECISIONS.map((d) => (
              <div key={d.title} className="border-t-2 border-[#800020] pt-5">
                <h3 style={display} className="text-lg font-bold">{d.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5f5b54]">{d.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 08 Outcome */}
        <section className="border-t border-[#e4e0d8] py-16">
          <SectionHeading number="08" label="Outcome" title="What admin users gained" />
          <p className="mb-10 max-w-3xl text-base leading-8 text-[#5f5b54]">
            The panel gives the association one place to manage the content behind its public website. Here is
            what changed for the people who use it every day.
          </p>
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#e4e0d8] bg-[#e4e0d8] md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white p-6">
                <h3 style={display} className="text-base font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f5b54]">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="mb-20 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#191919] p-10 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 style={display} className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
              Interested in a similar project?
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
              I build full-stack React applications with clean interfaces and reliable back ends.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-lg bg-[#800020] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6a001b]"
          >
            Let’s talk ↗
          </a>
        </section>
      </main>
    </div>
  );
}