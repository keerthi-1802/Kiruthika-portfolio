import React, { useState } from "react";

// Listed newest first. The timeline below shows them oldest → newest (left to right).
// To show newest first instead, set CHRONOLOGICAL to false.
const CHRONOLOGICAL = true;

const experiences = [
  {
    role: "ReactJS Developer (Specialized in UI)",
    company: "Madhura Technologies",
    url: "https://madhuratech.com/",
    logo: "https://madhuratech.com/wp-content/uploads/2025/11/Madhura-logo.png",
    period: "Nov 2025 – Present",
    current: true,
    points: [
      "Describe your main responsibility here.",
      "Mention the technologies you use (React, JavaScript, REST APIs, etc.).",
      "Add a measurable result or a feature you delivered.",
    ],
  },
  {
    role: "ReactJS Intern",
    company: "Avanexa Technologies",
    url: "https://avanexa.com/",
    logo: "https://avanexa.com/wp-content/uploads/2024/05/avanexa-logo.png",
    // Turns the logo into a solid red silhouette, whatever its original colour.
    logoFilter:
      "brightness(0) saturate(100%) invert(11%) sepia(98%) saturate(7493%) hue-rotate(358deg) brightness(97%) contrast(114%)",
    period: "Jul 2025 – Sep 2025",
    current: false,
    points: [
      "Built responsive front-end components and pages using ReactJS.",
      "Worked with the team to turn design requirements into reusable UI features.",
      "Fixed bugs and improved the usability and performance of existing screens.",
    ],
  },
  {
    role: "UX/UI Intern",
    company: "Magnil Technology",
    url: "https://magniltechnology.com/",
    logo: "https://magniltechnology.com/wp-content/uploads/2025/11/Magnil-3-black.svg",
    period: "Jun 2024 – Sep 2024",
    current: false,
    points: [
      "Designed user interfaces, wireframes and prototypes for web and mobile screens.",
      "Applied user-centred design principles to create clearer, easier layouts.",
      "Collaborated with developers to hand over designs and review the final interfaces.",
    ],
  },
];

function CompanyLogo({ src, company, url, filter }) {
  const [failed, setFailed] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${company}`}
      className="flex h-16 w-40 items-center justify-center rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:border-gray-300 hover:shadow"
    >
      {failed ? (
        <span className="text-2xl font-extrabold text-red-600">{company.charAt(0)}</span>
      ) : (
        <img
          src={src}
          alt={`${company} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          style={filter ? { filter } : undefined}
          className="max-h-full max-w-full object-contain"
        />
      )}
    </a>
  );
}

export default function Experience() {
  const items = CHRONOLOGICAL ? [...experiences].reverse() : experiences;

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-4 py-12 font-['Bricolage_Grotesque',sans-serif] text-slate-800 sm:py-20"
    >
      {/* Loads Bricolage Grotesque. If you already load it in index.html or index.css, you can remove this. */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap');`}</style>

      <div className="mb-14 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          My Journey
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Experience</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-red-600" />
      </div>

      {/* Horizontal on md+ screens, stacked on mobile */}
      <div className="relative grid gap-10 md:grid-cols-3 md:gap-6">
        {/* Horizontal timeline line (desktop only) */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-[11px] hidden h-0.5 bg-gradient-to-r from-slate-200 via-red-300 to-red-600 md:block"
        />

        {items.map((item) => (
          <article key={`${item.company}-${item.period}`} className="relative flex flex-col">
            {/* Timeline marker */}
            <span
              aria-hidden="true"
              className={`relative z-10 mb-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-red-600 ${
                item.current ? "bg-red-600 ring-4 ring-red-600/20" : "bg-white"
              }`}
            />

            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-1 w-full bg-gradient-to-r from-red-600 to-red-300 opacity-60 transition group-hover:opacity-100" />

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <CompanyLogo
                  src={item.logo}
                  company={item.company}
                  url={item.url}
                  filter={item.logoFilter}
                />

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                    {item.period}
                  </span>
                  {item.current && (
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      Current
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-xl font-bold leading-snug">{item.role}</h3>
                <p className="mb-4 font-semibold text-slate-500">{item.company}</p>

                <ul className="space-y-2.5 text-sm text-slate-600">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}