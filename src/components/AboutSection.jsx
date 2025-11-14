import React from "react";
import Profile from "../assets/avi.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-5 sm:px-8 md:px-16 lg:px-32 bg-[#FAF7F2] text-[#3b2f2f]"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3b2f2f] tracking-wide">
          About <span className="text-[#b88b4a]">Me</span>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        
        {/* === Profile Image Bento === */}
        <div className="bg-white/70 backdrop-blur-xl border border-[#b88b4a30] shadow-lg rounded-3xl p-8 flex flex-col items-center justify-center hover:shadow-[0_0_35px_rgba(59,47,47,0.45)]
 transition-all duration-300">
          <img
            src={Profile}
            alt="Avinash"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-8 border-[#b88b4a] shadow-[0_0_25px_rgba(184,139,74,0.3)] object-cover mb-5"
          />

          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Hi, I'm <span className="momo-trust-display text-[#b88b4a] font-bold">Avinash 👋</span>
          </h3>

          <p className="momo-trust-display text-sm sm:text-base font-light text-[#4b4b4b] leading-relaxed text-center">
            Full-Stack MERN Developer | API & Microservices | Scalable Web |
          Cloud Architecture {" "}
          
          </p>
        </div>

        {/* === Who I Am Bento === */}
        <div className="bg-white/70 backdrop-blur-xl border border-[#b88b4a30] shadow-lg rounded-3xl p-8 col-span-1 md:col-span-2  transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">Who I Am</h3>

          <p className="momo-trust-display text-[#4b4b4b] text-[15px] leading-relaxed mb-4">
            I'm Avinash, a passionate MERN stack developer who loves building
            clean, modern and user-friendly applications. I enjoy turning ideas
            into real digital products that make an impact.
          </p>

          <p className="momo-trust-display text-[#4b4b4b] text-[15px] leading-relaxed">
            I focus on delivering meaningful work — pixel-perfect UI,
            smooth animations, fast backend logic, and AI-powered features
            that bring creativity and intelligence into apps.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
