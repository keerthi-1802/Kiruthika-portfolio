
import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaBehance,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import resume from "../assets/KiruthikaCV.pdf";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kiruthika-narayanan/",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/keerthi-1802",
    icon: FaGithub,
    external: true,
  },
 
  {
    label: "Download Resume",
    href: resume,
    icon: FiDownload,
    download: true,
  },
];

export default function SocialSidebar() {
  return (
    <div
      className="
        fixed z-50 flex
        bottom-4 right-4 flex-row gap-3
        md:bottom-auto md:top-1/2
        md:-translate-y-1/2
        md:right-6 md:flex-col
      "
    >
      {LINKS.map(
        ({ label, href, icon: Icon, external, download }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            download={
              download ? "Kiruthika-Resume.pdf" : undefined
            }
            target={external ? "_blank" : undefined}
            rel={
              external ? "noopener noreferrer" : undefined
            }
            className="
              group flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/10
              bg-[#191919]
              text-[#faf9f6]/80
              shadow-lg
              transition-all duration-200
              hover:-translate-y-0.5
              hover:border-[#f46c51]
              hover:bg-[#800020]
              hover:text-white
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#f46c51]
            "
          >
            <Icon
              size={19}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:scale-110"
            />
          </a>
        )
      )}
    </div>
  );
}
