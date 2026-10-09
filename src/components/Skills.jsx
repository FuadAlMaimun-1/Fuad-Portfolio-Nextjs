import React, { useState, useEffect } from "react";
import { SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const section = document.getElementById("skills");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, {
      threshold: 0.2
    });
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Figma Design Row 1 Icons (7 Badges)
  const topRowIcons = [{
    name: "React",
    icon: <SiReact className="text-[#61DAFB]" />
  }, {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" />
  }, {
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#339933]" />
  }, {
    name: "Express.js",
    icon: <SiExpress className="text-white" />
  }, {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E]" />
  }, {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />
  }];

  // Figma Design Row 2 Icons (4 Badges)
  const bottomRowIcons = [{
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#06B6D4]" />
  }, {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248]" />
  }];
  return <section id="skills" className="relative overflow-hidden bg-[#05020D] py-20 min-h-[820px] flex items-center justify-center select-none font-preahvihear">
      <div className="container-safe relative z-10 flex flex-col items-center text-center w-full max-w-4xl px-4">
        {/* Header Title with Preahvihear Font */}
        <div className={`max-w-xl mx-auto mb-10 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h2 className="text-lg md:text-xl font-normal text-[#E2E8F0] leading-relaxed tracking-wide">
            I'm currently looking to join a{" "}
            <span className="text-[#A855F7]">cross-functional team</span> that
            values improving people's lives through accessible design
          </h2>
        </div>

        {/* Dynamic Skill Badges Node Section */}
        <div className={`relative z-20 flex flex-col items-center gap-3 max-w-lg mx-auto transition-all duration-700 delay-200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {/* Top Row */}
          <div className="flex flex-wrap justify-center gap-3">
            {topRowIcons.map((item, idx) => <div key={idx} className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#130B24] border border-[#A855F7]/30 flex items-center justify-center text-lg shadow-md hover:scale-110 hover:border-[#A855F7] transition-all duration-300 cursor-pointer" title={item.name}>
                {item.icon}
              </div>)}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center gap-3">
            {bottomRowIcons.map((item, idx) => <div key={idx} className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#130B24] border border-[#A855F7]/30 flex items-center justify-center text-lg shadow-md hover:scale-110 hover:border-[#A855F7] transition-all duration-300 cursor-pointer" title={item.name}>
                {item.icon}
              </div>)}
          </div>
        </div>

        {/* Tree Connecting Lines (SVG Curved Connectors) */}
        <div className="w-full max-w-md h-16 relative pointer-events-none z-10 mt-1">
          <svg className="w-full h-full stroke-purple-500/25" fill="none">
            <path d="M 60 0 C 60 30, 200 30, 225 64" strokeWidth="1" />
            <path d="M 130 0 C 130 30, 210 30, 225 64" strokeWidth="1" />
            <path d="M 225 0 L 225 64" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 320 0 C 320 30, 240 30, 225 64" strokeWidth="1" />
            <path d="M 390 0 C 390 30, 250 30, 225 64" strokeWidth="1" />
          </svg>
        </div>

        {/* Central Glowing Logo Node & Perspective Rings */}
        <div className={`relative flex items-center justify-center transition-all duration-1000 ease-out delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          {/* Outer Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[80px] -z-10" />

          {/* Center Circular Node */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-b from-[#8B5CF6] to-[#4C1D95] flex items-center justify-center border border-purple-300/30 shadow-[0_0_50px_rgba(139,92,246,0.4)] z-20 overflow-hidden">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-boy-confused-while-sitting-on-couch-with-laptop-3d-icon-png-download-13031230.png" alt="Developer working on laptop" className="w-full h-full object-cover object-center" />
          </div>

          {/* Perspective Outer Orbit Ellipses */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[190px] border border-purple-500/20 rounded-[100%] [transform:rotateX(74deg)] pointer-events-none z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[240px] border border-purple-500/15 rounded-[100%] [transform:rotateX(74deg)] pointer-events-none z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[290px] border border-purple-500/10 rounded-[100%] [transform:rotateX(74deg)] pointer-events-none z-0" />
        </div>
      </div>
    </section>;
};
export default Skills;