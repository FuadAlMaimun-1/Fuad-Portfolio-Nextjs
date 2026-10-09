import React, { useEffect, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const fullName = "Fuad Al Maimun";
  useEffect(() => {
    setIsLoaded(true);
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) {
        clearInterval(typingInterval);
      }
    }, 120);
    return () => {
      clearInterval(typingInterval);
    };
  }, []);
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="relative min-h-screen overflow-hidden bg-[#08050d] text-white">
      {/* ================= Background Glow ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-700/15 blur-[140px]" />

        <div className="absolute right-[-10%] top-[10%] h-[550px] w-[550px] rounded-full bg-violet-600/15 blur-[150px]" />

        <div className="absolute bottom-[-20%] left-[35%] h-[450px] w-[450px] rounded-full bg-fuchsia-600/10 blur-[150px]" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      </div>

      {/* ================= Main Container ================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-28 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          {/* ================= LEFT ================= */}
          <div className={`transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            {/* Small Intro */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-500" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-purple-300">
                Welcome to my portfolio
              </span>
            </div>

            {/* Heading */}
            <h1 className="whitespace-nowrap text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
                {displayName}
                <span className="ml-1 text-purple-400 animate-pulse"></span>
              </span>
            </h1>

            {/* Role */}
            <h2 className="mt-6 text-2xl font-medium text-slate-200 sm:text-3xl">
              Full Stack <span className="text-purple-400">Developer</span>
            </h2>

            {/* Description */}

            {/* Location */}
            {/* <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} className="text-purple-400" />
              Dhaka, Bangladesh
             </div> */}

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              {/* Primary */}
              <button onClick={scrollToContact} className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3.5 font-semibold shadow-lg shadow-purple-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-600/30">
                Let's Work Together
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

            {/* Social */}
            <div className="mt-10 flex items-center gap-3">
              <span className="mr-2 text-sm text-slate-600">
                Connect with me
              </span>

              {/* GitHub */}
              <a href="https://github.com/FuadAlMaimun-1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300">
                <FaGithub size={19} />
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/fuad-al-maimun-97ba42399/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300">
                <FaLinkedin size={19} />
              </a>

              {/* Email */}
              <a href="mailto:fuadalmaimun10@gmail.com" aria-label="Email" className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300">
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* ================= RIGHT PROFILE ================= */}
          <div className={`relative flex justify-center transition-all delay-200 duration-1000 lg:justify-end ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}>
            {/* Outer Glow */}
            <div className="absolute h-[340px] w-[340px] rounded-full bg-purple-600/20 blur-[100px] sm:h-[440px] sm:w-[440px]" />

            {/* Decorative Circle */}
            <div className="absolute h-[320px] w-[320px] rounded-full border border-purple-400/10 sm:h-[430px] sm:w-[430px]" />

            <div className="absolute h-[280px] w-[280px] rounded-full border border-purple-400/10 sm:h-[380px] sm:w-[380px]" />

            {/* Profile Image */}
            <div className="relative z-10">
              <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                {/* Purple Glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-500/40 via-fuchsia-500/20 to-transparent blur-2xl" />

                {/* Image Circle */}
                <div className="relative h-full w-full overflow-hidden rounded-full border border-purple-300/20 bg-gradient-to-br from-purple-950 to-[#120b1d] p-2 shadow-2xl shadow-purple-950/50">
                  <div className="h-full w-full overflow-hidden rounded-full bg-[#100a18]">
                    <img src="/images/profile.png.jpeg" alt="Fuad Al Maimun - Full Stack Developer" className="h-full w-full object-cover object-center transition duration-700 hover:scale-105" />
                  </div>
                </div>

                {/* ================= Floating Tech Badges ================= */}

                {/* React */}
                <div className="float-slow absolute -right-5 top-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#110c1b]/90 shadow-xl shadow-cyan-900/20 backdrop-blur-md">
                  <span className="text-2xl text-cyan-400">⚛</span>
                </div>

                {/* Next.js */}
                <div className="float-medium absolute -right-10 bottom-24 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#110c1b]/90 text-white shadow-xl shadow-white/10 backdrop-blur-md">
                  <RiNextjsFill size={28} />
                </div>
                <div className="float-medium absolute -right-10 bottom-24 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#110c1b]/90 text-white shadow-xl shadow-white/10 backdrop-blur-md">
                  <RiTailwindCssFill size={28} />
                </div>

                {/* TypeScript */}
                <div className="float-side absolute -left-7 top-16 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-[#110c1b]/90 shadow-xl shadow-blue-900/20 backdrop-blur-md">
                  <BiLogoTypescript size={30} className="text-blue-400" />
                </div>

                {/* JavaScript */}
                <div className="float-medium absolute -left-10 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl border border-yellow-400/20 bg-[#110c1b]/90 shadow-xl shadow-yellow-900/10 backdrop-blur-md">
                  <span className="rounded bg-yellow-400 px-1.5 py-1 text-xs font-black text-black">
                    JS
                  </span>
                </div>

                {/* MongoDB */}
                <div className="float-medium absolute -bottom-8 left-14 flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/20 bg-[#110c1b]/90 shadow-xl shadow-green-900/10 backdrop-blur-md">
                  <SiMongodb size={30} className="text-green-400" />
                </div>

                {/* Node.js */}
                <div className="float-slow absolute -bottom-2 right-14 flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/20 bg-[#110c1b]/90 shadow-xl shadow-green-900/10 backdrop-blur-md">
                  <span className="text-sm font-bold text-green-400">Node</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

        <div className="h-9 w-5 rounded-full border border-slate-700 p-1">
          <div className="mx-auto h-1.5 w-1 rounded-full bg-purple-400 animate-bounce" />
        </div>
      </div>
    </section>;
};
export default Hero;