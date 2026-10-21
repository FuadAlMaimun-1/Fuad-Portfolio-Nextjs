"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ScrollSequence from "./ScrollSequence";
import { FRAME_SEQUENCES } from "../data/frames";

const TEXTS = [
  "Fuad Al Maimun",
  "Full Stack Developer",
  "Passionate Web Developer",
  "Building Modern Web Apps",
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollHintRef = React.useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const currentText = TEXTS[textIndex];
    const typingSpeed = isDeleting ? 45 : 110;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentText.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === currentText) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        const nextText = currentText.slice(0, displayText.length - 1);
        setDisplayText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TEXTS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  const scrollToContact = () => {
    const contactEl = document.getElementById("contact");

    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleProgress = (progress) => {
    const hint = scrollHintRef.current;

    if (hint) {
      hint.style.opacity = String(Math.max(0, 1 - progress * 14));
    }
  };

  const isName = textIndex === 0;

  return (
    <ScrollSequence
      id="home"
      basePath={FRAME_SEQUENCES.about.basePath}
      count={FRAME_SEQUENCES.about.count}
      scrollLength="300vh"
      className="bg-[#08050d] text-white"
      wrapperClassName="bg-[#08050d] text-white"
      overlayClassName="bg-gradient-to-r from-[#08050d] via-[#08050d]/85 to-[#08050d]/40"
      canvasFilter="saturate(1.4) contrast(1.05) brightness(1.05)"
      onProgress={handleProgress}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-1/4 h-[320px] w-[320px] rounded-full bg-purple-700/20 blur-[120px] sm:h-[480px] sm:w-[480px]" />
        <div className="absolute -right-24 top-10 h-[340px] w-[340px] rounded-full bg-violet-600/20 blur-[130px] sm:h-[520px] sm:w-[520px]" />
        <div className="absolute bottom-[-15%] left-1/3 h-[300px] w-[300px] rounded-full bg-fuchsia-600/10 blur-[130px] sm:h-[420px] sm:w-[420px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-24 pt-28 sm:px-8 sm:pb-28 lg:px-12">
        <div className="grid w-full items-center gap-12 sm:gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left Side */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Intro */}
            {/* Intro */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6 lg:mb-7">
              <span className="h-px w-8 bg-purple-500 sm:w-10" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-purple-300 sm:text-xs sm:tracking-[0.25em]">
                Welcome to my portfolio
              </span>
            </div>

            {/* Heading */}
            <div className="flex flex-col">
              <span className="mb-1 text-base font-medium text-slate-300 sm:mb-1.5 sm:text-lg lg:mb-2 lg:text-2xl">
                Hi, I&apos;m
              </span>

              <h1 className="min-h-[3.2rem] text-3xl font-bold leading-[1.1] tracking-tight sm:min-h-[4.4rem] sm:text-5xl lg:min-h-[5.6rem] lg:text-6xl">
                <span
                  className={`inline-block bg-gradient-to-r from-purple-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent transition-all duration-300 ${
                    isName
                      ? "text-3xl sm:text-5xl lg:text-6xl"
                      : "text-2xl sm:text-3xl lg:text-4xl"
                  }`}
                >
                  {displayText}
                  <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[2px] animate-pulse rounded-full bg-fuchsia-400 align-middle" />
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="mt-0.5 max-w-xl text-sm leading-7 text-slate-400 sm:mt-1 sm:text-base sm:leading-8 lg:mt-1.5">
              I specialize in crafting high-performance, modern web applications
              using React, Next.js, TypeScript, and clean architecture.
            </p>
            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:items-center">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-600/40 sm:text-base"
              >
                Let&apos;s Work Together
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <a
                href="/Fuad_Al_Maimun_CV.pdf"
                download="Fuad_Al_Maimun_CV.pdf"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-purple-500/30 bg-purple-950/30 px-6 py-3.5 text-sm font-medium text-purple-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-purple-600/20 hover:text-white sm:text-base"
              >
                Download CV
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-9 flex items-center gap-3 sm:mt-11">
              <span className="mr-1 text-xs text-slate-500 sm:text-sm">
                Connect with me
              </span>

              <a
                href="https://github.com/FuadAlMaimun-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/fuad-al-maimun-97ba42399/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:fuadmaymun0@gmail.com"
                aria-label="Email"
                className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Side / Profile */}
          <div
            className={`relative flex justify-center transition-all delay-200 duration-1000 lg:justify-end ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative flex h-[260px] w-[260px] items-center justify-center sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-[90px]" />

              {/* Decorative Circles */}
              <div className="absolute inset-0 rounded-full border border-purple-400/10" />
              <div className="absolute inset-6 rounded-full border border-purple-400/10 sm:inset-8" />

              {/* Profile Image */}
              <div className="relative z-10 h-[82%] w-[82%] overflow-hidden rounded-full border border-purple-300/20 bg-gradient-to-br from-purple-950 to-[#120b1d] p-2 shadow-2xl shadow-purple-950/50">
                <div className="h-full w-full overflow-hidden rounded-full bg-[#100a18]">
                  <img
                    src="/images/profile.png.jpeg"
                    alt="Fuad Al Maimun - Full Stack Developer"
                    className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 sm:flex"
      ></div>
    </ScrollSequence>
  );
};

export default Hero;
