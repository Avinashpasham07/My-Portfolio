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
import Cursor from "./components/Cursor";
import M2 from "./components/marquee-1"
import PhilosophySection from "./components/PhilosophySection";

import "./index.css";

const App = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);

      // Kinetic Spotlight Movement
      const spotlight = document.querySelector(".spotlight-element");
      if (spotlight) {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
        spotlight.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const lenis = new Lenis({
      duration: 1.5, // Even smoother v6 feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenis = lenis; // Expose for programmatic scrolling

    return () => {
      lenis.destroy();
      window.lenis = null;
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="bg-[#030303] text-white relative">
      <Cursor />
      {/* Cinematic Masterpiece Overlays */}
      <div className="noise-overlay" />
      <div className="spotlight-element" />

      <Navbar />

      <section id="hero">
        <HeroSection />
      </section>

      <MarqueeSection />

      <AboutSection />

      <SkillsSection />
      <ProjectsSection />
      <M2 />
      <Contact />

      <SocialBar />
      <Analytics />
    </main>
  );
};

export default App;
