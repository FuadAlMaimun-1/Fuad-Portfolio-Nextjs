import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
export const Contact = () => {
  return <footer id="contact" className="relative scroll-mt-20 bg-[#0A0518] text-white px-6 md:px-10 lg:px-16 py-10 font-['Preahvihear'] overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-purple-600/15 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-600/15 blur-[100px]" />

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-950/20" />

      {/* Main Footer */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Top Content */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          {/* Left Content */}
          <div className="max-w-md text-left">

            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Let's Connect
            </h2>

            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Have a project in mind or want to work together?
              Feel free to reach out. I'm always open to discussing
              new projects and opportunities.
            </p>

          
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start md:items-end gap-3">

            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Follow Me
            </p>

            <div className="flex items-center gap-3">

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/fuad-al-maimun-97ba42399/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all duration-300">
                <FaLinkedin size={17} />
              </a>

              {/* Email */}
              <a href="mailto:fuadmaymun0@gmail.com" aria-label="Email" className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all duration-300">
                <Mail size={17} />
              </a>

              {/* WhatsApp */}
              <a href="https://api.whatsapp.com/send/?phone=%2B8801300725948&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all duration-300">
                <FaWhatsapp size={17} />
              </a>

            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="my-7 border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Fuad Al Maimun. All rights reserved.
          </p>

          <p className="text-xs text-gray-600">
            Designed & Built with React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>;
};
export default Contact;