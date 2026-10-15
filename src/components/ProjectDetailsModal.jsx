"use client";

import React, { useEffect, useState } from "react";
import {
  X,
  ExternalLink,
  Globe,
  Layers,
  AlertTriangle,
  Rocket,
  CheckCircle2,
  Sparkles,
  Code2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectDetailsModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  // Handle escape key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset tab to overview when opening new project
  useEffect(() => {
    if (isOpen) {
      setActiveTab("overview");
    }
  }, [isOpen, project?.id]);

  if (!isOpen || !project) return null;

  const githubUrl = project.githubUrl || project.githubLink;
  const liveUrl = project.liveUrl || project.liveLink;
  const hasGithub = githubUrl && githubUrl !== "#";
  const hasLiveDemo = liveUrl && liveUrl !== "#";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 font-preahvihear select-none"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-[#06030c]/85 backdrop-blur-md animate-modal-backdrop transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div
        className="relative z-10 flex flex-col h-[90vh] max-h-[820px] w-full max-w-4xl overflow-hidden rounded-3xl border border-purple-500/30 bg-[#0d071b] text-white shadow-2xl shadow-purple-950/70 animate-modal-scale"
      >
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-purple-600/20 blur-[90px]" />

        {/* Modal Top Header */}
        <div className="relative flex shrink-0 items-center justify-between border-b border-purple-500/20 px-5 py-3.5 sm:px-7 bg-[#0a0515]/95 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-900/30 text-purple-300">
              <Layers size={18} />
            </span>
            <div>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-purple-400">
                {project.category || "Featured Project"}
              </span>
              <h2
                id="modal-project-title"
                className="text-base sm:text-xl font-bold text-white line-clamp-1"
              >
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-300 transition-all hover:border-purple-400/50 hover:bg-purple-600/20 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5 sm:px-7 space-y-5">
          {/* Banner & Media Preview */}
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-[#120824] shadow-inner">
            <div className="h-44 sm:h-56 md:h-64 w-full overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple-950 to-[#0e071e]">
                  <span className="text-2xl font-bold text-purple-300">{project.title}</span>
                </div>
              )}
            </div>
            {/* Gradient Overlay for Title */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d071b] via-[#0d071b]/40 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2.5">
              <div>
                <span className="inline-block rounded-full bg-purple-600/80 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  {project.status || "Active Project"}
                </span>
                <p className="mt-1 text-xs text-purple-200/90 font-medium">
                  Role: <span className="text-white">{project.role || "Full Stack Developer"}</span>
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-2">
                {hasLiveDemo && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-purple-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-purple-900/40 hover:bg-purple-500 transition-all hover:scale-105"
                  >
                    <Globe size={13} />
                    <span>Live Demo</span>
                    <ExternalLink size={11} />
                  </a>
                )}
                {hasGithub && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-black/60 px-3.5 py-1.5 text-xs font-semibold text-gray-200 hover:border-purple-400 hover:text-white transition-all hover:scale-105 backdrop-blur-md"
                  >
                    <FaGithub size={13} />
                    <span>Source</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-purple-500/20 pb-3">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "overview"
                  ? "bg-purple-600/30 text-purple-200 border border-purple-500/50 shadow-md shadow-purple-950/40"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <Sparkles size={14} />
              <span>Overview & Features</span>
            </button>

            <button
              onClick={() => setActiveTab("tech")}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "tech"
                  ? "bg-purple-600/30 text-purple-200 border border-purple-500/50 shadow-md shadow-purple-950/40"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <Code2 size={14} />
              <span>Tech Stack</span>
            </button>

            <button
              onClick={() => setActiveTab("challenges")}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "challenges"
                  ? "bg-purple-600/30 text-purple-200 border border-purple-500/50 shadow-md shadow-purple-950/40"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <AlertTriangle size={14} />
              <span>Challenges Faced ({project.challenges?.length || 0})</span>
            </button>

            <button
              onClick={() => setActiveTab("future")}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "future"
                  ? "bg-purple-600/30 text-purple-200 border border-purple-500/50 shadow-md shadow-purple-950/40"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <Rocket size={14} />
              <span>Future Plans</span>
            </button>
          </div>

          {/* Tab 1: Overview & Features */}
          {activeTab === "overview" && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <h3 className="text-base font-bold text-white mb-2">Project Overview</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-3">
                    Key Highlights & Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-xl border border-purple-500/15 bg-purple-950/20 p-3 text-xs text-gray-300"
                      >
                        <CheckCircle2 size={15} className="text-purple-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Tech Stack */}
          {activeTab === "tech" && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <h3 className="text-base font-bold text-white mb-1">Architecture & Technologies</h3>
                <p className="text-xs text-gray-400">
                  Carefully chosen tools and frameworks to guarantee performance, responsiveness, and developer ergonomics.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {project.technologies?.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-950/30 to-[#120824] p-3.5 hover:border-purple-400/40 transition-all"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-400/30 bg-purple-900/40 text-purple-300 font-bold text-xs">
                      {tech.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{tech}</h4>
                      <span className="text-[10px] text-purple-400">Core Dependency</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Challenges Faced During Development */}
          {activeTab === "challenges" && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  Engineering Challenges & Solutions
                </h3>
                <p className="text-xs text-gray-400">
                  Technical hurdles encountered during development and how they were solved through structured engineering.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                {project.challenges && project.challenges.length > 0 ? (
                  project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-purple-500/20 bg-purple-950/20 p-4 sm:p-5 backdrop-blur-md"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-600/30 border border-purple-400/30 text-purple-300 text-xs font-bold">
                          {idx + 1}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {challenge.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-8">
                        {challenge.detail}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-400 italic">No specific challenges recorded.</p>
                )}
              </div>
            </div>
          )}

          {/* Tab 4: Future Plans & Improvements */}
          {activeTab === "future" && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  Future Roadmap & Planned Improvements
                </h3>
                <p className="text-xs text-gray-400">
                  Feature expansions, performance optimizations, and integrations planned for upcoming releases.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {project.futurePlans && project.futurePlans.length > 0 ? (
                  project.futurePlans.map((plan, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-2xl border border-purple-500/20 bg-purple-950/20 p-4 hover:border-purple-400/40 transition-all"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-purple-900/40 border border-purple-400/30 text-purple-300">
                        <Rocket size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-purple-400">
                          Phase {idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-gray-200 leading-snug mt-1">
                          {plan}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-400 italic">No upcoming plans listed.</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Fixed Footer */}
        <div className="flex shrink-0 flex-col-reverse sm:flex-row items-center justify-between gap-3 border-t border-purple-500/20 bg-[#0a0515]/95 px-5 py-3.5 sm:px-7">
          <p className="text-xs text-gray-500">
            Press <kbd className="rounded border border-purple-500/30 bg-purple-950/40 px-1.5 py-0.5 text-[10px] text-purple-300">Esc</kbd> or click outside to close
          </p>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-gray-300 hover:bg-white/[0.08] hover:text-white transition-colors"
            >
              Close
            </button>
            {hasLiveDemo && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-purple-600 px-4 py-2 text-xs font-semibold text-white hover:bg-purple-500 transition-colors"
              >
                <Globe size={14} />
                <span>Visit Project</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
