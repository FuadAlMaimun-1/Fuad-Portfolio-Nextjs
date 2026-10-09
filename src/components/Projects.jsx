import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const section = document.getElementById('projects');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, {
      threshold: 0.1
    });
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return <section id="projects" className="relative overflow-hidden bg-[#05020D] py-24 min-h-screen flex items-center justify-center font-preahvihear select-none">
    <div className="container-safe relative z-10 w-full max-w-5xl px-4 mx-auto">

      {/* Projects Alternating Stack */}
      <div className={`space-y-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {projectsData.map((project, index) => <ProjectCard key={project.id || index} project={project} index={index} />)}
      </div>

      {/* Bottom CTA to GitHub */}
      <div className={`max-w-xl mx-auto text-center mt-28 pt-10 border-t border-purple-900/30 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h3 className="text-xl font-normal text-white mb-2">
          Want to see more projects?
        </h3>
        <p className="text-sm text-gray-400 mb-6">
          Check out my GitHub repository for open-source creations.
        </p>

        <a href="https://github.com/FuadAlMaimun-1" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 rounded-full bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/40 text-purple-200 text-sm font-medium transition-all duration-300 hover:scale-105">
          Visit My GitHub
        </a>
      </div>

    </div>
  </section>;
};
export default Projects;