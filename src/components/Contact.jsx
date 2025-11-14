import React from "react";
import { SiGmail, SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] px-5 sm:px-8 md:px-12 lg:px-20 py-20"
    >

      {/* === Heading === */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3b2f2f] mb-3 tracking-tight">
          Get In <span className="text-[#b88b4a]">Touch</span>
        </h2>
        <p className="text-base sm:text-lg text-[#3b2f2f]/70 max-w-2xl mx-auto">
          Let’s build something meaningful together 
        </p>
      </div>

      {/* === Bento Grid (Responsive 2 per row on mobile) === */}
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        {/* === Email === */}
        <a
          href="mailto:avinashpasham18@gmail.com"
          className="col-span-2 sm:col-span-1 md:col-span-2 bg-white/70 backdrop-blur-md border border-[#3b2f2f30] p-5 sm:p-8 rounded-3xl text-[#3b2f2f] hover:shadow-[0_0_25px_rgba(184,139,74,0.25)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#b88b4a10] rounded-full -translate-y-14 translate-x-14 group-hover:scale-150 transition-transform duration-500"></div>
          <SiGmail className="w-10 h-10 sm:w-14 sm:h-14 mb-3 text-[#b88b4a] relative z-10" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 relative z-10">
            Email Me
          </h3>
          <p className="text-[#3b2f2f]/70 text-xs sm:text-sm md:text-base relative z-10">
            avinashpasham18@gmail.com
          </p>
        </a>

        {/* === LinkedIn === */}
        <a
          href="https://www.linkedin.com/in/avinashyadavpasham/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/70 backdrop-blur-md border border-[#3b2f2f30] p-5 sm:p-8 rounded-3xl text-[#3b2f2f] hover:shadow-[0_0_25px_rgba(184,139,74,0.25)] hover:-translate-y-1 transition-all duration-500"
        >
          <SiLinkedin className="w-8 h-8 sm:w-10 sm:h-10 mb-3 text-[#0a66c2]" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
            LinkedIn
          </h3>
          <p className="text-[#3b2f2f]/70 text-xs sm:text-sm md:text-base">
            avinash pasham
          </p>
        </a>

        {/* === GitHub === */}
          <a
          href="https://wa.me/918099301082X"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/70 backdrop-blur-md border border-[#3b2f2f30] p-5 sm:p-8 rounded-3xl text-[#3b2f2f] hover:shadow-[0_0_25px_rgba(184,139,74,0.25)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group"
        >
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#b88b4a10] rounded-full translate-y-14 -translate-x-14 group-hover:scale-150 transition-transform duration-500"></div>
          <SiWhatsapp className="w-10 h-10 sm:w-14 sm:h-14 mb-3 text-[#25D366] relative z-10" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 relative z-10">
            WhatsApp
          </h3>
          <p className="text-[#3b2f2f]/70 text-xs sm:text-sm md:text-base relative z-10">
            +91 80993 01082
          </p>
        </a>

        {/* === WhatsApp === */}
        <a
          href="https://github.com/Avinashpasham07"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 sm:col-span-1 md:col-span-2 bg-white/70 backdrop-blur-md border border-[#3b2f2f30] p-5 sm:p-8 rounded-3xl text-[#3b2f2f] hover:shadow-[0_0_25px_rgba(184,139,74,0.25)] hover:-translate-y-1 transition-all duration-500 overflow-hidden group"
        >
          <div className="absolute bottom-0 right-0 w-42 h-42 bg-[#b88b4a10] rounded-full translate-y-14 -translate-x-14 group-hover:scale-180 transition-transform duration-500"></div>
          <SiGithub className="w-8 h-8 sm:w-10 sm:h-10 mb-3 text-[#24292f]" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
            GitHub
          </h3>
          <p className="text-[#3b2f2f]/70 text-xs sm:text-sm md:text-base">
            Avinashpasham07
          </p>
        </a>
      </div>

      {/* === Footer === */}
      <div className="mt-10 text-center text-xs sm:text-sm text-[#3b2f2f]/70">
        <p>
          Designed & Built by{" "}
          <span className="text-[#b88b4a] font-medium">Avinash Yadav</span>
        </p>
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </section>
  );
}
