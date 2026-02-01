import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [time, setTime] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Live Clock Logic (Industrial Feel)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);

    // Use Lenis for smooth scrolling if available
    if (window.lenis) {
      window.lenis.scrollTo(`#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    opened: { opacity: 1, x: 0 }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-6 pointer-events-none px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto relative flex items-center p-2 rounded-full border transition-all duration-500 overflow-hidden ${isScrolled || isOpen
            ? "bg-[#050505]/80 backdrop-blur-xl border-white/10 shadow-2xl"
            : "bg-[#050505]/40 backdrop-blur-md border-white/5"
            }`}
        >
          {/* Background Noise Tissue */}
          <div className="absolute inset-0 rounded-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />

          {/* Identity (Desktop Only) */}
          <div className="hidden md:flex items-center gap-4 px-6 border-r border-white/10 shrink-0">
            <span className="text-sm font-display font-black text-[#c2a4ff] uppercase tracking-wider">Avinash</span>
          </div>

          {/* Navigation Links (Desktop Only) */}
          <ul className="hidden md:flex items-center gap-1 p-1">
            {links.map((link) => (
              <li key={link.id}>
                <Magnetic strength={0.2}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="relative px-5 py-2.5 rounded-full group"
                  >
                    {activeTab === link.id && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 text-[11px] font-mono uppercase tracking-[0.2em] transition-colors duration-300 ${activeTab === link.id ? "text-white" : "text-white/40 group-hover:text-white"
                      }`}>
                      {link.name}
                    </span>
                  </button>
                </Magnetic>
              </li>
            ))}
          </ul>

          {/* Mobile Label / Menu Trigger */}
          <div className="md:hidden flex items-center justify-between w-full min-w-[200px] px-4">
            <span className="text-sm font-display font-black text-[#c2a4ff] uppercase tracking-wider">Avinash</span>
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1.5px] bg-white rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-4 h-[1.5px] bg-white/70 rounded-full self-end"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1.5px] bg-white rounded-full"
              />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[90] bg-[#030303] flex flex-col justify-center px-10 md:hidden"
          >
            {/* Overlay Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <span className="text-[#c2a4ff] font-mono text-xs tracking-[0.5em] uppercase block mb-12">// Navigation</span>
              {links.map((link, idx) => (
                <motion.button
                  key={link.id}
                  variants={itemVariants}
                  onClick={() => handleNavClick(link.id)}
                  className="flex flex-col items-start group"
                >
                  <span className="text-[#c2a4ff]/40 font-mono text-xs mb-1">0{idx + 1}</span>
                  <span className="text-5xl font-display font-bold text-white uppercase tracking-tighter group-hover:text-[#c2a4ff] transition-colors">
                    {link.name}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Bottom Info */}

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;