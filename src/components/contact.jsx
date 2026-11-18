import React from "react";

const HIRE_EMAIL = "kiruthikanarayanan002@gmail.com";

export default function HireForm() {
  return (
    <section
      id="hire"
      aria-labelledby="hire-heading"
      className="bg-[#800020] px-6 py-6 font-['Bricolage_Grotesque'] text-white md:px-12 md:py-8 lg:px-24"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <h2
          id="hire-heading"
          className="text-2xl font-bold tracking-tight md:text-3xl"
        >
          Let’s work together.
        </h2>

        <a
          href={`mailto:${HIRE_EMAIL}?subject=Hiring%20inquiry`}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-[#800020] transition hover:bg-rose-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Email me <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}