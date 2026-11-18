import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import tananweb from "../assets/work/tananweb.png";
import admin from "../assets/work/admin.png";
import gnxt from "../assets/work/gnxt.png";
import bright from "../assets/work/bright.png";

const projects = [
  {
    id: "01",
    title: "TANAN Norway",
    category: "Full Stack Development",
    description: "Public website and admin panel for the Tamil Association Norway.",
    tags: ["React", "Node", "MySQL"],
    image: tananweb,
    href: "https://tanan.no",
    external: true,
    theme: "bg-[#FA8072]",
  },
  {
    id: "02",
    title: "Admin Dashboard",
    category: "Full Stack Development",
    description: "A smarter way to manage data.",
    tags: ["Node", "MySQL", "Charts", "AWSLightSail"],
    image: admin,
    href: "/work/tanan-admin-panel",
    theme: "bg-[#DDE1E5]",
  },
  {
    id: "03",
    title: "Inventory System ",
    category: "Frontend Development",
    description: "A seamless inventory management experience.",
    tags: ["UI", "User Experience", "Research"],
    image: gnxt,
    href: "/work/gnxt",
    theme: "bg-[#ffffff]",
  },
  {
    id: "04",
    title: "Kitchen manufacturing industries",
    category: "Website Development",
    description: "A modern website for a kitchen manufacturing company.",
    tags: ["UI", "User Experience", "Research"],
    image: bright,
    href: "https://brightkitchenind.com/",
    theme: "bg-[#90d5ff]",
  },
];

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&display=swap');`;

const SelectedWorks = () => {
  return (
    <section
      id="work"
      className="bg-[#eaeae8] px-4 py-20 font-['Bricolage_Grotesque',sans-serif] text-[#171717] sm:px-8 sm:py-28 lg:px-12"
    >
      <style>{FONT_IMPORT}</style>

      <div className="mx-auto max-w-[1180px]">
        {/* HEADER */}
        <div className="mb-12 grid gap-8 sm:mb-16 lg:grid-cols-[1fr_340px] lg:items-end">
          <div>


            <h2 className="mt-5 text-[52px] font-extrabold leading-[0.92] tracking-[-0.045em] sm:text-[84px] lg:text-[104px]">
              Selected
              <br />
              Work
            </h2>
          </div>

          <div className="lg:pb-3">
            <p className="text-[14px] leading-[1.7] text-[#6f6f6a] sm:text-[15px]">
              Our selected solutions empower online experiences, combining
              growth and functionality through thoughtful design and
              development.
            </p>

            <a
              href="https://github.com/keerthi-1802"
              className="group mt-6 hidden items-center gap-3 rounded-full bg-[#171717] py-2 pl-6 pr-2 text-[13px] font-bold text-white transition-colors duration-300 hover:bg-[#800020] hover:text-[#ffffff] sm:inline-flex"
            >
              See all projects
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#171717] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </div>


        {/* STACKING PROJECT CARDS */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <article
              key={project.id}
              style={{ top: `${88 + i * 18}px` }}
              className={`group/card relative grid overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.07)] sm:rounded-[36px] lg:sticky lg:min-h-[460px] lg:grid-cols-2 ${project.theme}`}
            >
              {/* INFO */}
              <div
                className={`flex flex-col justify-between gap-10 p-6 sm:p-10 lg:p-12 ${i % 2 === 1 ? "lg:order-2" : ""
                  }`}
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-[#171717] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                    {project.category}
                  </span>

                  <span className="text-[44px] font-extrabold leading-none tracking-[-0.05em] text-[#171717]/15 sm:text-[64px]">
                    {project.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-[30px] font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-[42px]">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-[360px] text-[14px] leading-[1.7] text-[#171717]/60 sm:text-[15px]">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[#171717]/15 px-3 py-1 text-[11px] font-semibold text-[#171717]/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>


                  {/* VIEW PROJECT BUTTON */}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-5 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-black transition-all duration-300 ease-out hover:gap-7 hover:bg-[#f1f1f1] focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    <span className="whitespace-nowrap">
                      View Project
                    </span>

                    <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-black text-white">
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.8}
                        className="absolute transition-all duration-300 ease-out group-hover:translate-x-8 group-hover:-translate-y-8"
                      />

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.8}
                        className="absolute -translate-x-8 translate-y-8 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                      />
                    </span>
                  </a>

                </div>
              </div>

              {/* IMAGE */}
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title}`}
                className={`relative m-3 block aspect-[4/3] overflow-hidden sm:m-4  lg:aspect-auto lg:min-h-[420px] ${i % 2 === 1 ? "lg:order-1" : ""
                  }`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full rounded-[22px] object-contain p-4 transition-transform duration-700 ease-out group-hover/card:scale-[1.03]"
                />
              </a>
            </article>
          ))}
        </div>


        {/* MOBILE BUTTON */}
        <a
          href="#all-projects"
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-5 py-4 text-[13px] font-bold text-white transition-colors hover:bg-[#800020] hover:text-[#ffffff] sm:hidden"
        >
          See all projects
          <ArrowRight size={16} />
        </a>

        {/* FOOTER STRIP */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 px-1">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#999]">
            SELECTED PROJECTS / 2025 — 2026
          </span>
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#999]">
            DESIGN & DEVELOPMENT
          </span>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;