import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const titleWordTop = "Avinash".split("");
  const titleWordBottom = "Yadav".split("");

  const letterVariants = {
    hidden: { y: 150, opacity: 0, rotate: 10 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden bg-transparent">
      {/* Huzaif-Inspired Atmosphere */}


      {/* Decorative Index */}
      <div className="absolute top-10 right-10 flex items-center gap-4 z-20">
        <span className="font-mono text-xs tracking-widest text-white/20 uppercase">Ready to work</span>
        <div className="w-2 h-2 rounded-full bg-[#c2a4ff] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto flex flex-col items-center"
        >
          {/* Tagline */}
          <motion.div variants={wordVariants} className="mb-8 md:mb-12 text-center">
            <span className="px-6 md:px-10 py-4 md:py-6 rounded-full border border-white/5 bg-white/[0.02] text-[#c2a4ff] font-mono text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase backdrop-blur-sm">
              Full Stack Developer
            </span>
          </motion.div>

          {/* Massive Impact Headline */}
          <div className="relative mb-8 md:mb-16">
            <div className="flex flex-col items-center leading-[0.8]">
              {/* Line 1: AVINASH */}
              <div className="flex overflow-hidden">
                {titleWordTop.map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    className="text-[clamp(3rem,12vw,12rem)] font-display mb-2 md:mb-5 font-black uppercase text-white tracking-tight md:tracking-[-0.05em]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Line 2: YADAV (Italic) */}
              <div className="flex overflow-hidden mt-[-1vw] md:mt-[-2vw]">
                {titleWordBottom.map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    className="text-[clamp(3rem,12vw,12rem)] font-display font-black md:ml-[-1rem] uppercase text-[#c2a4ff] tracking-tight md:tracking-[-0.05em] italic"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <motion.div variants={wordVariants} className="max-w-2xl mb-16 px-4">
            <p className="text-xl md:text-2xl text-white/30 text-center font-light leading-relaxed font-main">
              Crafting <span className="text-white">perfect</span> digital solutions through precision engineering and high-end aesthetic vision.
            </p>
          </motion.div>

          {/* High-End CTAs */}
          <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
            <Magnetic strength={0.4}>
              <motion.button
                variants={wordVariants}
                onClick={() => window.open("https://drive.google.com/file/d/1zPvXefFsT_QPDypJAFd8d-Wg0pPjunuA/preview", "_blank")}
                className="group relative px-12 py-5 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-4 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <div className="px-5 py-5 absolute inset-x-0 bottom-0 h-1 bg-[#c2a4ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="text-sm tracking-[0.2em] uppercase font-bold">View Resume</span>
                <span className="text-3xl -rotate-45 group-hover:rotate-0 transition-transform duration-300">→</span>
              </motion.button>
            </Magnetic>

          </div>
        </motion.div>
      </div>

      {/* Industrial Numbers */}
      <div className="absolute left-10 bottom-12 z-20">
        <span className="text-7xl font-display font-black text-white/5 tracking-tighter">001</span>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
