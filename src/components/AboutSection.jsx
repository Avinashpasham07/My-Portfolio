import React from "react";
import { motion } from "framer-motion";
import { FaUserAstronaut, FaLaptopCode, FaGraduationCap, FaGlobe } from "react-icons/fa";
import { SiReact, SiJavascript } from "react-icons/si";

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* --- Header --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
            <h2
              className="font-display font-black text-white uppercase leading-[0.8] tracking-tighter"
              style={{ fontSize: "clamp(3rem, 12vw, 9rem)" }}
            >
              THE <span className="text-[#c2a4ff]">MIND.</span>
            </h2>
          </motion.div>
        </div>

        {/* --- Bento Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Card 1: The Bio (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-[#050505] border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-[#c2a4ff]/30 transition-colors"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <FaUserAstronaut className="text-8xl text-[#c2a4ff]" />
            </div>

            <div className="relative z-10">
              <span className="text-[#c2a4ff] font-mono text-xs tracking-widest uppercase mb-4 block">// 01. Who I Am</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Avinash.
                <span className="text-white/40 block text-2xl mt-2 font-normal">Full Stack Engineer & UI/UX Designer.</span>
              </h3>
              <p className="text-white/60 leading-relaxed max-w-lg">
                I don't just write code; I architect digital experiences. Currently a final year B.Tech student at <span className="text-white">VBIT</span>, merging technical precision with creative design to build scalable, high-performance applications.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Current Focus (Replaced "Status") */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#080808] border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-[#c2a4ff]/30 transition-colors flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#c2a4ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <span className="text-[#c2a4ff] font-mono text-xs tracking-widest uppercase mt-2 block">// 02. Current Focus</span>
              <div className="flex items-center gap-3 mb-2">


              </div>
            </div>

            <div className="mt-2">
              <div className="text-white/40 text-sm mb-1 uppercase tracking-wider font-mono">Exploring</div>
              <div className="text-xl font-bold text-white">MERN Stack & AI Agents</div>
              <div className="text-sm text-[#c2a4ff]/80 mt-1">Sloving Real World Problem Statements</div>
            </div>
          </motion.div>

          {/* Card 3: Education (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#080808] border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-[#c2a4ff]/30 transition-colors"
          >
            <FaGraduationCap className="text-4xl text-white/10 absolute top-6 right-6 group-hover:text-[#c2a4ff]/20 transition-colors" />
            <span className="text-[#c2a4ff] font-mono text-xs tracking-widest uppercase mb-8 block">// 03. Education</span>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold text-white">B.Tech</h4>
                <p className="text-white/50 text-sm">VBIT College</p>
              </div>
              <div className="h-[1px] w-full bg-white/5" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/40">Graduation</span>
                <span className="text-white font-mono">2026</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: The Vision (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-[#050505] border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-[#c2a4ff]/30 transition-colors"
          >
            <div className="absolute -right-10 -bottom-10 opacity-5">
              <FaGlobe className="text-[12rem] text-white" />
            </div>

            <span className="text-[#c2a4ff] font-mono text-xs tracking-widest uppercase mb-6 block">// 04. The Vision</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
                "I architect digital ecosystems that transcend simple utility to create <span className="text-[#c2a4ff] italic font-bold">lasting resonance.</span>"
              </p>

              <div className="flex flex-col justify-end space-y-4">
                <div className="flex items-center gap-4 text-sm text-white/60 border-l border-white/10 pl-4">
                  <SiReact className="text-[#61DAFB]" />
                  <span>MERN Stack Specialist</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/60 border-l border-white/10 pl-4">
                  <FaLaptopCode className="text-emerald-400" />
                  <span>Scalable Systems</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;