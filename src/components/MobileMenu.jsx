"use client";
import React, { useEffect } from "react";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import NavLink from "./NavLink";

const MobileMenu = ({
  isOpen,
  onClose,
  activeSection,
  navItems = [],
}) => {
  // Close menu with Escape and prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Purple Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-[#08050d]/80
          backdrop-blur-md transition-all duration-300 lg:hidden
          ${
            isOpen
              ? "visible opacity-100"
              : "invisible opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`
          fixed inset-x-0 top-16 z-50 overflow-hidden
          border-b border-purple-400/15
          bg-[#0c0713]/95 shadow-2xl shadow-purple-950/30
          backdrop-blur-2xl
          transition-all duration-300 ease-out lg:hidden
          ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-purple-700/15 blur-[90px]" />

          <div className="absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-fuchsia-600/10 blur-[80px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <nav
          aria-label="Mobile navigation"
          className="relative mx-auto max-h-[calc(100dvh-4rem)] max-w-7xl overflow-y-auto px-5 py-5 sm:px-8"
        >
          {/* Menu Header */}
          <div className="mb-5 flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-300">
                Explore
              </p>

              <h2 className="mt-1 text-lg font-semibold text-white">
                Navigation
              </h2>
            </div>

      
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <div
                  key={item.id}
                  style={{
                    transitionDelay: isOpen
                      ? `${index * 40}ms`
                      : "0ms",
                  }}
                  className={`
                    group relative overflow-hidden rounded-xl
                    border transition-all duration-300
                    ${
                      isActive
                        ? "border-purple-400/25 bg-gradient-to-r from-purple-500/15 to-fuchsia-500/[0.06] shadow-lg shadow-purple-950/10"
                        : "border-white/[0.04] bg-white/[0.02] hover:border-purple-400/20 hover:bg-purple-500/[0.06]"
                    }
                  `}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <>
                      <span className="absolute inset-y-2 left-0 w-0.5 rounded-r-full bg-gradient-to-b from-purple-300 to-fuchsia-500" />

                      <span className="pointer-events-none absolute -left-8 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-purple-500/10 blur-xl" />
                    </>
                  )}

                  <div
                    onClick={() => {
                      document.body.style.overflow = "";
                      onClose?.();
                    }}
                    className="relative px-4 py-3.5"
                  >
                    <NavLink
                      href={`#${item.id}`}
                      label={item.label}
                      isActive={isActive}
                      onClick={() => {
                        document.body.style.overflow = "";
                        onClose?.();
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

    
      

          {/* Footer */}
          <div className="mt-5 border-t border-white/[0.06] pt-4 text-center">
            <p className="text-xs text-slate-500">
              Thanks for visiting my portfolio.
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
