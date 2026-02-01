import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

export default function SocialBar() {
  const [visible, setVisible] = useState(true);
  const [isInContact, setIsInContact] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  // Logic to hide the bar when it hits the footer (Contact Section)
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      const rect = contactSection?.getBoundingClientRect();

      // Check if we are in the contact section
      if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
        setIsInContact(true);
        setVisible(false);
      } else {
        setIsInContact(false);
        // While scrolling, hide. When stopped, show.
        setVisible(false);
        if (scrollTimeout) clearTimeout(scrollTimeout);
        const timeout = setTimeout(() => setVisible(true), 600);
        setScrollTimeout(timeout);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  const socialLinks = [
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/avinashyadavpasham/" },
    { icon: <FaGithub />, link: "https://github.com/Avinashpasham07" },
    { icon: <FaEnvelope />, link: "mailto:avinashyadav18@gmail.com" },
  ];

  return (
    <AnimatePresence>
      {visible && !isInContact && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-6 md:left-10 bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40 hidden md:flex"
        >
          {/* --- The Capsule Container --- */}
          <div className="flex flex-col items-center gap-6 py-8 px-3 rounded-full bg-[#050505] border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />

            {/* 1. Top Decoration: Line + "LINK" Text */}
            <div className="flex flex-col items-center gap-4 opacity-50">
              <div className="w-[1px] h-8 bg-white/20" />
              {/* Rotated Text */}
              <span className="text-[10px] font-mono text-white tracking-[0.3em] uppercase -rotate-90 whitespace-nowrap pt-2">
                Link
              </span>
            </div>

            {/* 2. Spacer */}
            <div className="h-4" />

            {/* 3. The Icons */}
            <div className="flex flex-col gap-4">
              {socialLinks.map((item, index) => (
                <Magnetic key={index} strength={0.3}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/5 transition-all duration-300 hover:bg-[#c2a4ff] hover:border-[#c2a4ff] hover:scale-110"
                  >
                    {/* Icon */}
                    <span className="text-lg text-white/60 group-hover:text-black transition-colors duration-300">
                      {item.icon}
                    </span>
                  </a>
                </Magnetic>
              ))}
            </div>

            {/* 4. Bottom Decoration: Green Dot */}
            <div className="mt-4">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}