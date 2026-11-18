import React from "react";

const menuLinks = [
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Stack", href: "#tech-stack" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#800020]";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 bg-[#faf9f6] text-[#191919]"
      style={{
        fontFamily: "'Instrument Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-[1280px] grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 border-b border-[#e4dfd6] px-4 py-3 sm:grid-cols-[1fr_auto_1fr] sm:px-10 sm:py-4 lg:px-12"
      >
        <a
          href="/"
          className={`justify-self-start rounded-sm text-2xl font-bold tracking-[-0.05em] ${focusRing}`}
          style={{
            fontFamily:
              "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Kiruthika
        </a>

        <ul className="col-span-2 col-start-1 row-start-2 m-0 flex list-none justify-center gap-4 p-0 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:gap-5 lg:gap-8">
          {menuLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`inline-flex min-h-[44px] items-center rounded-sm px-1 text-sm font-medium transition-colors hover:text-[#800020] ${focusRing}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:kiruthikanarayanan002@gmail.com?subject=Let's%20Work%20Together"
          className={`col-start-2 row-start-1 inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-full border border-[#d9d2c7] px-4 text-sm font-semibold transition-colors hover:border-[#800020] hover:text-[#800020] sm:col-start-3 sm:justify-self-end ${focusRing}`}
        >
          Let’s talk
          <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}