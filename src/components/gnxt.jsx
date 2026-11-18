// gnxt.jsx
import { useEffect } from "react";
import gnxt1 from "../assets/gnxt/gnxt1.png";
import gnxt2 from "../assets/gnxt/gnxt2.png";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Instrument+Sans:wght@400;500;600&display=swap";

const display = { fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" };
const body = { fontFamily: "'Instrument Sans', ui-sans-serif, system-ui, sans-serif" };

/* ---------- Content ---------- */

const META = [
  { label: "Role", value: "Frontend developer" },
  { label: "Client", value: "Tyre distribution business" },
  { label: "Timeline", value: "[Start] – [End]" },
  { label: "Platform", value: "B2B transport management" },
];

const OVERVIEW =
  "GNXT is a B2B transport management platform designed for a tyre distribution business. It brings operational information and transport-related workflows into a centralized digital experience, helping teams manage complex business processes more clearly. My work focused on translating business requirements into structured user flows, intuitive interfaces and scalable interaction patterns.";

const CHALLENGE =
  "Transport and distribution operations involve interconnected processes, multiple responsibilities, and information that needs to reach the right people at the right time. The challenge was to organize these workflows into one centralized platform without overwhelming users, while making sure each organizational role could access and manage the information relevant to its responsibilities.";

const GOALS = [
  "Simplify complex operational requirements into clear, completable tasks",
  "Organize data-heavy screens into a hierarchy users can navigate",
  "Give each organizational role access to the information it needs",
  "Keep interaction patterns consistent so the platform can scale",
  "Prioritize clarity and efficient access over visual complexity",
];

const MY_ROLE =
  "I worked as the frontend developer on GNXT. I turned business requirements into structured user flows and built them into interfaces that are intuitive and consistent. My focus was on how screens are organized, how components are reused across the platform, and how role-based views show each user only the information they need.";

const APPROACH = [
  {
    title: "Workflow simplification",
    text: "Mapped complex operational requirements into structured user flows that are easier to understand and complete.",
  },
  {
    title: "Information architecture",
    text: "Organized information into a clear hierarchy, helping users move through data-heavy operational screens without losing context.",
  },
  {
    title: "Role-based access",
    text: "Built user management and access views around different organizational responsibilities.",
  },
  {
    title: "Consistent interaction patterns",
    text: "Established reusable interface components that keep behavior consistent and support scaling across the platform.",
  },
  {
    title: "Business-focused UI",
    text: "Prioritized clarity, usability and efficient access to operational information over decorative complexity.",
  },
];

const PRODUCT_DESIGN =
  "The interface makes complex business operations easier to navigate. Clear visual hierarchy, structured layouts and consistent components help users understand information and move through workflows with confidence. The design follows the needs of a B2B operational environment rather than unnecessary visual complexity.";

const OUTCOME =
  "A structured product experience that brings transport-related workflows into one centralized platform, with clearer information architecture, role-based access and consistent interaction patterns. It shows how I approach complex B2B problems on the frontend: translating workflows into structured interfaces, organizing dense information and building reusable components that scale.";

const OUTCOME_POINTS = [
  {
    title: "Clearer workflows",
    text: "Transport-related tasks are broken into structured flows that are easier to follow and complete.",
  },
  {
    title: "Role-based views",
    text: "Each organizational role sees the information and actions relevant to its responsibilities.",
  },
  {
    title: "Scalable components",
    text: "Shared interface patterns keep the platform consistent as new modules and features are added.",
  },
];

/* ---------- Helpers ---------- */

function useGoogleFonts() {
  useEffect(() => {
    const id = "gnxt-fonts";
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
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-[#e4e0d8] bg-[#800020] py-3 pl-3 pr-5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(25,25,25,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#191919] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#800020] motion-reduce:transition-none"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-[#191919]/10">
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



/* Two screenshots, slightly overlapping. gnxt2 sits over the lower edge of gnxt1. */
function ScreenshotStack() {
  return (
    <div className="flex flex-col">
      <figure className="relative z-10 m-0 w-[88%] overflow-hidden rounded-xl border border-[#e4e0d8] bg-white shadow-[0_18px_40px_-18px_rgba(25,25,25,0.35)]">
        <img src={gnxt1} alt="GNXT platform dashboard" className="block h-auto w-full" loading="lazy" />
      </figure>
      <figure className="relative z-20 m-0 ml-auto -mt-16 w-[80%] overflow-hidden rounded-xl border border-[#e4e0d8] bg-white shadow-[0_18px_40px_-18px_rgba(25,25,25,0.35)] sm:-mt-24">
        <img src={gnxt2} alt="GNXT product screen showing structured layout" className="block h-auto w-full" loading="lazy" />
      </figure>
    </div>
  );
}

/* ---------- Page ---------- */

export default function GnxtCaseStudy() {
  useGoogleFonts();

  return (
    <div style={body} className="min-h-screen bg-[#faf9f6] text-[#191919]">
      <HomeButton />

      <main className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* 01 Overview */}
        <header className="grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Label>Case study · 02 Overview</Label>
            <h1 style={display} className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              A transport management platform for a tyre distribution business.
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

          <ScreenshotStack />
        </header>

        {/* 02 Challenge */}
        <section className="grid gap-10 border-t border-[#e4e0d8] py-16 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading number="02" label="Challenge" title="Complex workflows, many roles" />
          <p className="text-base leading-8 text-[#5f5b54]">{CHALLENGE}</p>
        </section>

        {/* 03 Goals */}
        <section className="grid gap-10 border-t border-[#e4e0d8] py-16 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading number="03" label="Goals" title="What the interface needed to do" />
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
          <SectionHeading number="04" label="My role" title="Frontend developer" />
          <p className="text-base leading-8 text-[#5f5b54]">{MY_ROLE}</p>
        </section>

        {/* 05 Approach */}
        <section className="border-t border-[#e4e0d8] py-16">
          <SectionHeading number="05" label="Approach" title="How the frontend was built" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {APPROACH.map((a, i) => (
              <article key={a.title} className="rounded-xl border border-[#e4e0d8] bg-white p-6">
                <p style={body} className="text-xs font-semibold text-[#800020]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 style={display} className="mt-2 text-xl font-bold">{a.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5f5b54]">{a.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 06 Product design */}
        <section className="border-t border-[#e4e0d8] py-16">
          <SectionHeading number="06" label="Product design" title="Built for operational work" />
          <p className="mb-10 max-w-3xl text-base leading-8 text-[#5f5b54]">{PRODUCT_DESIGN}</p>
          
        </section>

        {/* 07 Outcome */}
        <section className="border-t border-[#e4e0d8] py-16">
          <SectionHeading number="07" label="Outcome" title="What the platform delivered" />
          <p className="mb-10 max-w-3xl text-base leading-8 text-[#5f5b54]">{OUTCOME}</p>
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#e4e0d8] bg-[#e4e0d8] md:grid-cols-3">
            {OUTCOME_POINTS.map((p) => (
              <div key={p.title} className="bg-white p-6">
                <h3 style={display} className="text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f5b54]">{p.text}</p>
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
              I build responsive, component-driven frontends for complex business applications.
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