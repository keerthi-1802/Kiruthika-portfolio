import React, { useEffect, useRef, useState } from "react";

const layers = [
  {
    id: "ux-ui",
    category: "User experience",
    title: "UX / UI Design",
    description:
      "I turn user needs into clear flows, wireframes, and interactive prototypes.",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "UI Design"],
  },
  {
    id: "frontend",
    category: "Interface development",
    title: "Frontend Development",
    description:
      "I translate designs into responsive, accessible web interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    category: "Application development",
    title: "Backend Development",
    description:
      "I build APIs and connect interfaces to server-side application logic.",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "database",
    category: "Data management",
    title: "Database Management",
    description:
      "I model and organize application data around the workflows it supports.",
    skills: ["MySQL", "MongoDB"],
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    description:
      "I prepare web applications for hosting and configure the environments they run in.",
    skills: ["Web Hosting", "Deployment Workflows", "Environment Configuration"],
  },
];



export default function TechStack() {
  const [activeId, setActiveId] = useState(layers[0].id);
  const layerRefs = useRef({});

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);

        if (activeEntry) {
          setActiveId(activeEntry.target.dataset.layer);
        }
      },
      { rootMargin: "-49% 0px -49% 0px" }
    );

    Object.values(layerRefs.current).forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);



  return (
  <section
    id="tech-stack"
    aria-labelledby="tech-stack-heading"
    className="relative overflow-clip bg-[#800020] text-[#FFF4E8]"
    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
  >
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700&family=Instrument+Sans:wght@400;500;600&display=swap');

      #tech-stack .ts-display {
        font-family: 'Bricolage Grotesque', sans-serif;
      }
    `}</style>

    <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-16 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-0">
      <div className="flex min-w-0 flex-col gap-10 lg:sticky lg:top-0 lg:min-h-[100svh] lg:justify-center lg:py-16">
        <header>
          <h2
            id="tech-stack-heading"
            className="ts-display max-w-lg text-[clamp(2.75rem,5.3vw,5rem)] font-bold leading-[0.98] tracking-[-0.055em]"
          >
            <span className="block">Design meets</span>
            <span className="block text-[#FFC2B2]">engineering.</span>
          </h2>

          <p className="mt-6 max-w-sm text-base leading-7 text-[#F9D9DD]">
            I design digital products around what people need and build the
            interfaces they use on the web.
          </p>
        </header>


      </div>

      <div className="min-w-0 lg:py-[24vh]">
        <div className="border-b border-[#FFF4E8]/30">
          {layers.map(({ id, category, title, description, skills }) => {
            const isActive = activeId === id;

            return (
              <article
                key={id}
                id={`${id}-layer`}
                data-layer={id}
                ref={(element) => {
                  layerRefs.current[id] = element;
                }}
                aria-labelledby={`${id}-heading`}
                aria-current={isActive ? "true" : undefined}
                className={`relative flex min-w-0 flex-col justify-center border-t border-[#FFF4E8]/30 py-9 pl-5 pr-4 transition-colors duration-300 motion-reduce:transition-none sm:py-12 sm:pl-8 sm:pr-6 lg:min-h-[52vh] ${
                  isActive ? "bg-[#FFF4E8]/10" : "bg-transparent"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-y-0 left-0 w-1 transition-colors duration-300 motion-reduce:transition-none ${
                    isActive ? "bg-[#FFF4E8]" : "bg-transparent"
                  }`}
                />

                {category && (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#FFC2B2]">
                    {category}
                  </p>
                )}

                <h3
                  id={`${id}-heading`}
                  className="ts-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl xl:text-5xl"
                >
                  {title}
                </h3>

                <p className="mt-4 max-w-md text-base leading-7 text-[#F9D9DD]">
                  {description}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="max-w-full rounded-md bg-[#FFF4E8]/10 px-3 py-1.5 text-sm font-medium text-[#FFF4E8]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
}