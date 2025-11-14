import React from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  return (
    <div className="bg-[#111]/95 backdrop-blur-sm border-t border-b border-[#b88b4a30] py-4 overflow-hidden">
      <Marquee
        gradient={false}
        speed={55}
        pauseOnHover={true}
        className="text-[#e5e0d8] uppercase tracking-widest font-semibold text-lg"
      >
        <span className="mx-6 text-[#b88b4a]">|</span>
        Full Stack Development
        <span className="mx-6 text-[#b88b4a]">|</span>
        MERN Stack Expertise
        <span className="mx-6 text-[#b88b4a]">|</span>
        Scalable Web Applications
        <span className="mx-6 text-[#b88b4a]">|</span>
        API Design & Integration
        <span className="mx-6 text-[#b88b4a]">|</span>
        Cloud & Deployment
        <span className="mx-6 text-[#b88b4a]">|</span>
        UI/UX Driven Development
        <span className="mx-6 text-[#b88b4a]">|</span>
        Database Architecture
        <span className="mx-6 text-[#b88b4a]">|</span>
        Performance Optimization
        <span className="mx-6 text-[#b88b4a]">|</span>
        Clean & Maintainable Code
        <span className="mx-6 text-[#b88b4a]">|</span>
        Creative Problem Solving
      </Marquee>
    </div>
  );
}
