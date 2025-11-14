import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Analytics } from "@vercel/analytics/react";   // ✅ Added

import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import MarqueeSection from "./components/MarqueeSection";
import SocialBar from "./components/SocialBar";

import "./index.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true,
      touchMultiplier: 1.2,
      infinite: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-[#FAF7F2] text-[#3b2f2f] relative">
      <Navbar />

      <section id="hero">
        <HeroSection />
      </section>

      <MarqueeSection />

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Floating Social Bar */}
      <SocialBar />

      {/* ✅ Vercel Analytics */}
      <Analytics />
    </main>
  );
}

export default App;
