import React from "react";
import { SiGmail, SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-screen 
        flex flex-col 
        bg-[#FAF7F2] 
        px-5 sm:px-8 md:px-12 lg:px-20 
        py-10 md:py-20 
        gap-6 md:gap-10
      "
    >

      {/* ================= HEADING ================= */}
      <div className="w-full text-center order-1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3b2f2f] tracking-tight mb-1">
          Get In <span className="text-[#b88b4a]">Touch</span>
        </h2>
        <p className="text-sm sm:text-base text-[#3b2f2f]/70 max-w-xl mx-auto">
          Let’s build something meaningful together
        </p>
      </div>

      {/* ================= MOBILE ANIMATION (reduced gap) ================= */}
      <div className="order-2 md:hidden flex justify-center mt-3">
        <iframe
          src="https://lottie.host/embed/4cacd561-3db6-444e-b594-37325a85a134/gTnDW7Z1Mm.lottie"
          style={{
            width: "100%",
            maxWidth: "260px",
            height: "260px",
            border: "none",
          }}
        ></iframe>
      </div>

      {/* ================= MAIN ROW ================= */}
      <div
        className="
          w-full 
          flex flex-col md:flex-row 
          justify-between 
          items-start 
          gap-6 md:gap-6
          order-3
        "
      >
        {/* ===== FORM (Mobile gap reduced) ===== */}
        <div className="basis-full md:basis-[70%] order-3 md:order-1 flex flex-col items-center md:items-start mt-2 md:mt-0">

          {/* CONTACT GRID */}
          <div
            className="
              w-full 
              grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 
              gap-2 sm:gap-4
            "
          >
            {/* EMAIL */}
            <a
              href="mailto:avinashpasham18@gmail.com"
              className="
                col-span-2 sm:col-span-1 md:col-span-2
                bg-white/70 backdrop-blur-md
                border border-[#3b2f2f20]
                p-5 sm:p-7
                rounded-3xl
                text-[#3b2f2f]
                hover:shadow-[0_0_25px_rgba(184,139,74,0.25)]
                transition-all duration-500
                relative overflow-hidden
              "
            >
              <SiGmail className="w-10 h-10 sm:w-12 sm:h-12 text-[#b88b4a] mb-2" />
              <h3 className="text-xl sm:text-2xl font-bold">Email Me</h3>
              <p className="text-[#3b2f2f]/70 text-xs sm:text-sm">
                avinashpasham18@gmail.com
              </p>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/avinashyadavpasham/"
              target="_blank"
              className="
                bg-white/70 backdrop-blur-md
                border border-[#3b2f2f20]
                p-5 sm:p-7
                rounded-3xl
                hover:shadow-[0_0_25px_rgba(184,139,74,0.25)]
                transition-all duration-500
              "
            >
              <SiLinkedin className="w-8 h-8 sm:w-10 sm:h-10 text-[#0a66c2] mb-2" />
              <h3 className="text-lg sm:text-xl font-bold">LinkedIn</h3>
              <p className="text-[#3b2f2f]/70 text-xs sm:text-sm">avinash pasham</p>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918099301082"
              target="_blank"
              className="
                bg-white/70 backdrop-blur-md
                border border-[#3b2f2f20]
                p-5 sm:p-7
                rounded-3xl
                hover:shadow-[0_0_25px_rgba(184,139,74,0.25)]
                transition-all duration-500
              "
            >
              <SiWhatsapp className="w-10 h-10 sm:w-12 sm:h-12 text-[#25D366] mb-2" />
              <h3 className="text-xl sm:text-2xl font-bold">WhatsApp</h3>
              <p className="text-[#3b2f2f]/70 text-xs sm:text-sm">+91 80993 01082</p>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Avinashpasham07"
              target="_blank"
              className="
                col-span-2 sm:col-span-1 md:col-span-2
                bg-white/70 backdrop-blur-md
                border border-[#3b2f2f20]
                p-5 sm:p-7
                rounded-3xl
                hover:shadow-[0_0_25px_rgba(184,139,74,0.25)]
                transition-all duration-500
              "
            >
              <SiGithub className="w-8 h-8 sm:w-10 sm:h-10 text-[#000] mb-2" />
              <h3 className="text-lg sm:text-xl font-bold">GitHub</h3>
              <p className="text-[#3b2f2f]/70 text-xs sm:text-sm">
                Avinashpasham07
              </p>
            </a>
          </div>
        </div>

        {/* ===== DESKTOP ANIMATION (kept same) ===== */}
        <div className="hidden md:flex basis-[30%] justify-center items-center order-2">
          <iframe
            src="https://lottie.host/embed/4cacd561-3db6-444e-b594-37325a85a134/gTnDW7Z1Mm.lottie"
            style={{
              width: "100%",
              maxWidth: "330px",
              height: "330px",
              border: "none",
            }}
          ></iframe>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="w-full text-center text-xs sm:text-sm text-[#3b2f2f]/70 order-4">
        <p>
          Designed & Built by{" "}
          <span className="text-[#b88b4a] font-medium">Avinash Yadav</span>
        </p>
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </section>
  );
}
