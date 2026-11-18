import React, { useState, useEffect } from "react";
import potrait from "../assets/potrait.png";

/*
  1. Add this to your index.html <head>:
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet">

  2. Put your photo at  public/profile.jpg  (or change PHOTO below).
     Best results: portrait orientation, 800px wide or more, face in the upper half.
*/

const PHOTO = potrait;

const display = { fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" };
const body = { fontFamily: "'Instrument Sans', ui-sans-serif, system-ui, sans-serif" };

function useTypewriter(text, speed = 150, startDelay = 500) {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        // Respect users who prefer reduced motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setDisplayed(text);
            setDone(true);
            return;
        }

        let i = 0;
        let interval;
        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                i += 1;
                setDisplayed(text.slice(0, i));
                if (i >= text.length) {
                    clearInterval(interval);
                    setDone(true);
                }
            }, speed);
        }, startDelay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, speed, startDelay]);

    return { displayed, done };
}

export default function Hero() {
    const [photoFailed, setPhotoFailed] = useState(false);
    const { displayed, done } = useTypewriter("Creative Developer.");

    return (
        <section
            style={body}
            className="relative min-h-screen overflow-hidden bg-[#faf9f6] px-6 py-7 text-[#191919] sm:px-10 lg:px-[4%]"
        >
            {/* Main Heading */}
            <div className="mx-auto max-w-[1450px] px-0 pb-12 pt-24 sm:pt-28 lg:px-12 lg:pt-16">
                <h1
                    style={display}
                    className="text-[clamp(3.25rem,8.6vw,8.5rem)] font-bold leading-[0.98] tracking-[-0.045em]"
                >
                    Hello, I’m Kiruthika
                    <br />
                    <span className="text-[#800020]">
                        {displayed}
                        <span
                            aria-hidden="true"
                            className={`ml-1 inline-block h-[0.85em] w-[0.08em] translate-y-[0.05em] bg-[#800020] ${
                                done ? "animate-pulse" : ""
                            }`}
                        />
                    </span>
                </h1>
            </div>

            {/* Bottom Content */}
            <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-16 px-0 pb-16 lg:grid-cols-2 lg:gap-20 lg:px-12">
                {/* Left Visual: portrait card */}
                <div className="flex justify-center py-4">
                    <div className="group relative w-full max-w-[400px]">
                        <figure className="m-0">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#e4e0d8] bg-white">
                                {photoFailed ? (
                                    <div
                                        style={display}
                                        className="flex h-full w-full items-center justify-center bg-[#800020] text-[10rem] font-bold text-[#191919]/80"
                                        aria-hidden="true"
                                    >
                                        K
                                    </div>
                                ) : (
                                    <img
                                        src={PHOTO}
                                        alt="Portrait of Kiruthika"
                                        onError={() => setPhotoFailed(true)}
                                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none"
                                    />
                                )}
                            </div>

                            {/* Caption row */}
                            <figcaption className="mt-5 flex items-end justify-between border-t border-[#e4e0d8] pt-5">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5f5b54]">
                                        Creative developer
                                    </p>
                                    <p style={display} className="mt-1.5 text-lg font-bold leading-snug tracking-tight">
                                        Turning ideas into digital experiences.
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                {/* Right Content */}
                <div className="max-w-[620px]">
                    <p
                        style={display}
                        className="text-2xl font-medium leading-[1.5] tracking-tight sm:text-[28px]"
                    >
                        I build modern web applications and meaningful digital experiences,
                        combining thoughtful design with functional development.
                    </p>

                    <p className="mt-6 max-w-[480px] text-base leading-8 text-[#5f5b54]">
                        A full stack developer passionate about creating clean, intuitive and
                        impactful digital solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <a
                            href="#projects"
                            className="rounded-lg bg-[#800020] px-8 py-4 text-sm font-semibold text-[#ffffff] shadow-[0_10px_26px_-10px_rgba(244,108,81,0.6)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#800020] motion-reduce:transition-none"
                        >
                            View my projects
                        </a>
                        <a
                            href="#contact"
                            className="rounded-lg border border-[#d8d5cf] bg-white px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[#191919] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#800020] motion-reduce:transition-none"
                        >
                            Let’s connect
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}