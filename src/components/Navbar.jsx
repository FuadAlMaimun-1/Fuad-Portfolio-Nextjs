import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbFileCvFilled } from "react-icons/tb";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // পেজের একদম নিচে পৌঁছালে Contact active হবে
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 160;
      let currentSection = "home";

      for (const item of navItems) {
        const element = document.getElementById(item.id);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();

    const homeSection = document.getElementById("home");

    homeSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // URL-এ #home যোগ হবে না
    window.history.replaceState(null, "", window.location.pathname);

    setActiveSection("home");
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#08050d]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      {/* Subtle bottom border */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
            : "bg-transparent"
        }`}
      />

      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleHomeClick}
          className="group flex items-center gap-3"
        >
          <div className="hidden sm:block">
            <p className="text-[17px] font-semibold tracking-tight text-white">
              Fuad
              <span className="text-purple-400">.</span>
            </p>

            <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
              Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              href={`#${item.id}`}
              label={item.label}
              isActive={activeSection === item.id}
            />
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/FuadAlMaimun-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden rounded-full p-2.5 text-slate-500 transition-all duration-300 hover:bg-purple-500/10 hover:text-purple-300 sm:block"
          >
            <FaGithub size={19} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fuad-al-maimun-97ba42399/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden rounded-full p-2.5 text-slate-500 transition-all duration-300 hover:bg-purple-500/10 hover:text-purple-300 sm:block"
          >
            <FaLinkedin size={19} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send/?phone=%2B8801300725948&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hidden rounded-full p-2.5 text-slate-500 transition-all duration-300 hover:bg-purple-500/10 hover:text-purple-300 sm:block"
          >
            <FaWhatsapp size={19} />
          </a>

          {/* Divider */}
          <div className="mx-1 hidden h-5 w-px bg-white/10 sm:block" />

          {/* CV Download */}
          <a
            href="/Fuad_Al_Maimun_CV.pdf"
            download="Fuad_Al_Maimun_CV.pdf"
            aria-label="Download CV"
            title="Download CV"
            className="rounded-full p-2 text-slate-500 transition-all duration-300 hover:bg-purple-500/10 hover:text-purple-300"
          >
            <TbFileCvFilled size={19} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white lg:hidden"
          >
            {isMobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        navItems={navItems}
      />
    </header>
  );
};

export default Navbar;
