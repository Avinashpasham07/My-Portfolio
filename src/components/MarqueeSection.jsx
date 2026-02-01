import React from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  const skills = [
    "Full Stack Architecture",
    "MERN Stack",
    "Neural Networks",
    "System Design",
    "Cloud Native",
    "UI/UX Engineering"
  ];

  return (
    <div className="w-full bg-[#030303] py-24 overflow-hidden relative z-10">

      {/* Decorative Gradients to fade edges */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />

      {/* --- ROW 1: Solid White Text (Moving Left) --- */}
      <div className="mb-4 rotate-1 origin-center opacity-80">
        <Marquee gradient={false} speed={80} autoFill>
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <span className="text-5xl md:text-8xl font-display font-black text-white px-8 uppercase tracking-tighter">
                {skill}
              </span>
              <span className="text-3xl md:text-5xl text-[#c2a4ff]">✦</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* --- ROW 2: Hollow/Outline Text (Moving Right) --- */}
      <div className="-rotate-1 origin-center opacity-40">
        <Marquee gradient={false} speed={80} direction="right" autoFill>
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              {/* The "Hollow" Effect using WebkitTextStroke */}
              <span
                className="text-5xl md:text-8xl font-display font-black text-transparent px-8 uppercase tracking-tighter"
                style={{ WebkitTextStroke: "1px #ffffff" }}
              >
                {skill}
              </span>
              <span className="text-3xl md:text-5xl text-[#c2a4ff]">✦</span>
            </div>
          ))}
        </Marquee>
      </div>

    </div>
  );
}