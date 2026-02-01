import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";
import { SiGmail, SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import { FaArrowUp, FaRegCopy, FaCheck } from "react-icons/fa";

const Contact = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  });

  const [copied, setCopied] = useState(false);
  const email = "avinashpasham18@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/avinashyadavpasham/",
      icon: <SiLinkedin />,
      color: "hover:text-[#0A66C2]",
      bg: "group-hover:bg-[#0A66C2]/10",
      label: "Connect",
    },
    {
      name: "GitHub",
      link: "https://github.com/Avinashpasham07",
      icon: <SiGithub />,
      color: "hover:text-white",
      bg: "group-hover:bg-white/10",
      label: "Codebase",
    },
    {
      name: "WhatsApp",
      link: "https://wa.me/918099301082",
      icon: <SiWhatsapp />,
      color: "hover:text-[#25D366]",
      bg: "group-hover:bg-[#25D366]/10",
      label: "Chat",
    },
  ];

  return (
    <section id="contact" className="relative w-full py-24 md:py-52 bg-[#030303] overflow-hidden">

      {/* --- Atmosphere --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">

        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 md:mb-32">
          <div className="space-y-6 w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-[#c2a4ff]" />
              <span className="text-[#c2a4ff] font-mono text-xs tracking-[0.4em] uppercase">Initialization</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12vw] md:text-[7vw] font-display font-black text-white leading-[0.8] tracking-tighter uppercase"
            >
              LET'S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c2a4ff] to-white/20">EVOLVE.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm md:text-base font-mono max-w-xs leading-relaxed text-left md:text-right mt-4 md:mt-0"
          >
            Currently open for full-time engineering roles.
          </motion.p>
        </div>

        {/* --- The Cyber Grid --- */}
        <div className="grid mt-20 grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 h-auto md:h-[400px]">

          {/* 1. Main Email Card */}
          <div className="md:col-span-2 h-[300px] md:h-full">
            <SpotlightCard className="h-full bg-[#050505] border border-white/10 rounded-3xl p-8 relative group overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c2a4ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex justify-between items-start">
                <div className="p-4 bg-white/5 rounded-full border border-white/5 text-2xl text-[#c2a4ff]">
                  <SiGmail />
                </div>
                <div className="px-3 py-1 rounded-full border border-white/10 bg-black/50 text-[10px] text-white/50 font-mono tracking-widest uppercase">
                  Primary Channel
                </div>
              </div>

              <div className="relative z-10 space-y-2">
                <h3 className="text-white/40 font-mono text-xs uppercase tracking-widest">Drop a line</h3>
                <div
                  onClick={handleCopy}
                  className="text-2xl md:text-4xl font-display font-bold text-white cursor-pointer hover:text-[#c2a4ff] transition-colors flex items-center gap-4 flex-wrap"
                >
                  <span className="break-all">avinash...18@gmail</span>
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                        className="text-[#c2a4ff] text-xl"
                      >
                        <FaCheck />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                        className="text-white/20 text-xl group-hover:text-white transition-colors"
                      >
                        <FaRegCopy />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <p className="text-xs text-white/30 font-mono mt-2">
                  {copied ? "Address copied to clipboard!" : "Click to copy address"}
                </p>
              </div>
            </SpotlightCard>
          </div>

          {/* 2. Social Stack */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {socialLinks.map((social, idx) => (
              <Magnetic key={idx} strength={0.2}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-[180px] md:h-full"
                >
                  <SpotlightCard className={`h-full bg-[#050505] border border-white/10 rounded-3xl p-6 flex flex-col justify-between group transition-all duration-500 ${social.bg}`}>
                    <div className="flex justify-between items-start">
                      <span className={`text-3xl text-white/20 transition-colors duration-300 ${social.color}`}>
                        {social.icon}
                      </span>
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest group-hover:text-white/50 transition-colors">
                        ↗
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block mb-1">
                        {social.label}
                      </span>
                      <span className="text-xl font-bold text-white group-hover:tracking-wide transition-all">
                        {social.name}
                      </span>
                    </div>
                  </SpotlightCard>
                </a>
              </Magnetic>
            ))}

            {/* 3. Resume / CV Link */}
            <Magnetic strength={0.2}>
              <div onClick={scrollToTop} className="cursor-pointer h-[180px] md:h-full">
                <SpotlightCard className="h-full bg-[#c2a4ff] border border-[#c2a4ff] rounded-3xl p-6 flex flex-col justify-center items-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <FaArrowUp className="text-3xl text-black relative z-10 group-hover:-translate-y-1 transition-transform" />
                  <span className="text-xs font-bold font-mono text-black uppercase tracking-widest mt-4 relative z-10">
                    Back to Top
                  </span>
                </SpotlightCard>
              </div>
            </Magnetic>

          </div>
        </div>

        {/* --- Footer Signature --- */}
        {/* UPDATED: Increased margin-top (mt-40 md:mt-60) to push it down significantly */}


      </div>
    </section>
  );
};

export default Contact;