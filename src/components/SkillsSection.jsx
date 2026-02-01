import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaAws, FaCode, FaBrain, FaRobot, FaTools, FaServer
} from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiTypescript, SiExpress, SiPostman,
  SiRedux, SiFramer, SiOpenai, SiMongodb
} from "react-icons/si";

// 1. Define the Data with specific colors/icons for the "Process" style cards
const skillCategories = [
  {
    id: "01",
    title: "Architecture",
    desc: "The foundational layer. I build pixel-perfect, interactive frontends using modern state management and component design patterns.",
    icon: <FaReact />,
    color: "from-[#c2a4ff] to-[#7a4bd4]", // Purple Gradient
    skills: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Framer", icon: <SiFramer className="text-white" /> },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Component Design", icon: <FaCode className="text-[#c2a4ff]" /> },
      { name: "State Mgmt", icon: <SiRedux className="text-[#764ABC]" /> },
    ]
  },
  {
    id: "02",
    title: "Neural / Back",
    desc: "The intelligence engine. Integrating robust backend logic with cutting-edge AI models for intelligent application behavior.",
    icon: <FaBrain />,
    color: "from-[#4ade80] to-[#22c55e]", // Green Gradient
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "OpenAI", icon: <SiOpenai className="text-emerald-400" /> },
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "API Arch", icon: <FaCode className="text-[#D4AF37]" /> },
      { name: "LLMs", icon: <SiOpenai className="text-emerald-400" /> },
      { name: "AI Integration", icon: <FaRobot className="text-cyan-400" /> },
    ]
  },
  {
    id: "03",
    title: "DevOps & Tools",
    desc: "The delivery pipeline. Ensuring reliability, scalability, and automated deployments across global environments.",
    icon: <FaServer />,
    color: "from-[#60a5fa] to-[#3b82f6]", // Blue Gradient
    skills: [
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Deploy", icon: <FaCode className="text-white" /> },
      { name: "CI/CD", icon: <FaTools className="text-orange-400" /> },
      { name: "Config", icon: <FaServer className="text-green-400" /> },
    ]
  },
];

// 2. The "SkillCard" Component - Adapting the Stacking Logic
const SkillCard = ({ i, title, desc, id, icon, color, skills, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} id="skills" className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`, // Stacking offset
        }}
        className="flex flex-col relative -top-[25%] h-[600px] md:h-[500px] w-[90vw] md:w-[1000px] rounded-3xl p-8 md:p-12 border border-white/10 bg-[#050505] shadow-2xl origin-top overflow-hidden group"
      >
        {/* Colorful Gradient Backdrop */}
        <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${color} opacity-10 blur-[100px] rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-500`} />

        {/* Header Section of the Card */}
        <div className="flex justify-between items-start z-10 mb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white text-lg">
                {icon}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-tight">
                {title}
              </h2>
            </div>
            <p className="text-white/40 text-sm md:text-base font-light max-w-lg leading-relaxed pl-14">
              {desc}
            </p>
          </div>
          <span className="text-6xl md:text-8xl font-display font-black text-white/5 select-none">{id}</span>
        </div>

        {/* The Grid of Skills (The "Meat" of this specific section) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 z-10 overflow-y-auto md:overflow-visible pr-2">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group/skill"
            >
              <span className="text-2xl transition-transform group-hover/skill:scale-110">{skill.icon}</span>
              <span className="text-xs font-mono text-white/60 uppercase tracking-widest">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar (Decorative) */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className={`h-full bg-gradient-to-r ${color} origin-left`}
          />
        </div>

      </motion.div>
    </div>
  );
};

// 3. The Main Section Component
export default function SkillsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="bg-[#030303] relative mt-32">

      {/* Section Intro (Sticky Header) */}
      <div className="h-[50vh] flex flex-col items-center justify-center sticky top-0 z-0 px-4">
        <span className="text-[#c2a4ff] font-mono text-xs tracking-[0.4em] uppercase mb-4">Full Stack Arsenal</span>
        <h2 className="text-[12vw] md:text-[10vw] font-display font-black text-white leading-[0.8] uppercase tracking-tighter text-center">
          THE <br /> <span className="text-white/20">TECH.</span>
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 pb-[20vh]">
        {skillCategories.map((category, i) => {
          // Calculate scale so cards shrink slightly as they stack
          const targetScale = 1 - (skillCategories.length - i) * 0.05;

          return (
            <SkillCard
              key={i}
              i={i}
              {...category}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}