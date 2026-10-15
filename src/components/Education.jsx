"use client";

import React, { useEffect, useState } from "react";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { educationData } from "../data/education";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("education");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap size={24} className="text-purple-300" />;
      case "Award":
        return <Award size={24} className="text-fuchsia-300" />;
      case "BookOpen":
      default:
        return <BookOpen size={24} className="text-violet-300" />;
    }
  };

  const getBorderGradient = (index) => {
    switch (index % 3) {
      case 0:
        return "from-purple-500/30 via-purple-500/10 to-transparent";
      case 1:
        return "from-fuchsia-500/30 via-fuchsia-500/10 to-transparent";
      case 2:
      default:
        return "from-violet-500/30 via-violet-500/10 to-transparent";
    }
  };

  return (
    <section
      id="education"
      className="relative min-h-screen overflow-hidden bg-[#070312] py-24 select-none font-preahvihear text-white"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[20%] h-[460px] w-[460px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute left-[-10%] bottom-[15%] h-[480px] w-[480px] rounded-full bg-violet-600/10 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-safe relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs tracking-[0.25em] uppercase text-purple-300 mb-4 backdrop-blur-md">
            <Sparkles size={14} className="text-purple-400" />
            <span>Academic Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Educational{" "}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              Qualification
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
            My formal academic education and professional software development certifications that shaped my engineering foundation.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="relative">
          {/* Vertical Timeline Guide Line (Desktop) */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-purple-500/40 via-fuchsia-500/30 to-purple-900/10" />

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className={`relative transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline node icon (Desktop) */}
                <div className="hidden md:flex absolute left-8 -translate-x-1/2 top-7 z-20 h-10 w-10 items-center justify-center rounded-full border border-purple-400/40 bg-[#0e071e] shadow-lg shadow-purple-950/50">
                  <span className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
                </div>

                {/* Card Container */}
                <div className="md:ml-20 rounded-2xl border border-purple-500/20 bg-[#0d071b]/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl hover:border-purple-400/40 transition-all duration-300 group">
                  {/* Subtle inner top glow border */}
                  <div
                    className={`absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r ${getBorderGradient(
                      index
                    )}`}
                  />

                  {/* Header: Icon, Degree, Status */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      {/* Mobile & Card Icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/25 bg-purple-900/30 shadow-md group-hover:scale-105 transition-transform duration-300">
                        {getIcon(item.icon)}
                      </div>

                      <div>
                        <span className="text-xs uppercase tracking-wider text-purple-400 font-medium">
                          {item.type}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                          {item.degree}
                        </h3>
                        <p className="text-sm font-medium text-slate-300 mt-1">
                          {item.institution}
                        </p>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/50 px-3.5 py-1 text-xs font-medium text-purple-300">
                        <Calendar size={13} />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-400">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Skills / Key Learnings */}
                  {item.skills && item.skills.length > 0 && (
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-3 flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-purple-400" />
                        Key Focus & Learnings
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="rounded-lg border border-purple-500/20 bg-purple-950/30 px-3 py-1 text-xs text-purple-200/90 transition-colors hover:border-purple-400/40 hover:text-white"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
