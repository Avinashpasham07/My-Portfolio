import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";

// Assets
import Mem1 from "../assets/mem-1.png";
import Fin1 from "../assets/fin-1.png";
import Edu2 from "../assets/edu-2.png";
import Onit1 from "../assets/onit-1.png";
import EduP from "../assets/edup.png";
import vin from "../assets/vindu.png";
import aud from "../assets/aud.png"

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // 0% -> -100% -> -200% -> -300% -> -400% -> -500% -> -600% -> -700%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-87.5%"]);

  const projects = [

    {
      id: "01",
      title: "EduCareerPrep",
      category: "AI EdTech Platform",
      stack: ["React", "Node.js", "MongoDB", "OpenAI", "Framer Motion"],
      description: "An AI-driven career development portal featuring automated path generation and mock interview simulations. Provides personalized roadmaps based on real-time market data analysis.",
      image: EduP,
      link: "https://edu-careerprep-18.vercel.app/",
    },
    {
      id: "02",
      title: "Vindu",
      category: "Reactive E-Commerce",
      stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Google Maps"],
      description: "A high-performance food delivery ecosystem with real-time merchant-to-customer synchronization. Features a reactive ordering pipeline and dynamic location-based discovery.",
      image: vin,
      link: "https://vindu-food-delivery.vercel.app/home",
    },
    {
      id: "03",
      title: "MemoRoam",
      category: "Full-Stack MERN",
      stack: ["React", "Node.js", "MongoDB", "Framer Motion"],
      description: "A high-performance travel architecture enabling seamless discovery and booking of unique global stays. Features real-time availability sync and ultra-low latency interactive maps.",
      image: Mem1,
      link: "https://memo-roam.onrender.com/listing",
    },
    {
      id: "04",
      title: "OnIT India",
      category: "Real-time Mesh",
      stack: ["React Native", "Socket.io", "Redis", "Google Maps"],
      description: "Hyper-local service mesh connecting urban taskers. Supports real-time tracking and automated conflict resolution via a reactive geo-distributed backend.",
      image: Onit1,
      link: "www.onitindia.com",
    },
    {
      id: "05",
      title: "AudiNix",
      category: "B2B SaaS Architecture",
      stack: ["React", "Node.js", "MongoDB", "Framer Motion"],
      description: "A zero-inventory wholesale engine for electronic resellers. Bridges the gap between primary suppliers and distributors through automated inventory syncing and fulfillment workflows.",
      image: aud,
      link: "https://www.audionixresellers.com/",
    },
    {
      id: "06",
      title: "AI Finance",
      category: "Neural Networks",
      stack: ["Python", "TensorFlow", "React", "PostgreSQL"],
      description: "Predictive behavioral modeling for financial growth. Analyzes spending patterns to provide hyper-personalized investment strategies using deep learning.",
      image: Fin1,
      link: "https://github.com/Avinashpasham07/gdg_prj_2025.git",
    },
    {
      id: "07",
      title: "EduTutor AI",
      category: "LLM Orchestration",
      stack: ["Next.js", "OpenAI", "Pinecone", "LangChain"],
      description: "Intelligent knowledge graph system adapting to student learning styles. Features conversational RAG and automated curriculum generation.",
      image: Edu2,
      link: "https://github.com/Avinashpasham07/EduTutor-AI.git",
    },

  ];

  return (
    // Height is 800vh because we have 8 "screens" of content (1 Intro + 7 Projects)
    <section ref={sectionRef} id="projects" className="relative h-[800vh] bg-[#030303] overflow-visible scroll-mt-20">

      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      {/* Sticky Container for Horizontal Movement */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        {/* Animated Horizontal Strip */}
        <div className="flex-1 flex items-center relative z-10">
          <motion.div style={{ x }} className="flex h-full">

            {/* --- SLIDE 0: Intro Title --- */}
            <div className="w-screen flex-shrink-0 h-screen flex flex-col items-center justify-center relative z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#c2a4ff] to-transparent mx-auto mb-8" />
                <h2 className="text-[15vw] leading-[0.8] font-display font-black text-white uppercase tracking-tighter">
                  M<span className="mb-6 text-transparent bg-clip-text bg-gradient-to-br from-[#c2a4ff] to-white/20">y</span>
                </h2>
                <h2 className="text-[15vw] leading-[0.8] font-display font-black text-white/5 uppercase tracking-tighter -mt-4 md:-mt-8">
                  WORK.
                </h2>
                <p className="mt-8 text-[#c2a4ff] font-mono text-xs md:text-sm tracking-[0.5em] uppercase">
                  Scroll to Initialize Archive
                </p>
              </motion.div>
            </div>

            {/* --- SLIDES 1-4: Projects --- */}
            {projects.map((project, idx) => (
              <div key={idx} className="w-screen flex-shrink-0 h-screen flex items-center justify-center p-4 md:p-16">

                {/* THE CARD CONTAINER */}
                <div className="w-full max-w-[1400px] h-[85vh] md:h-[80vh] grid grid-rows-[40%_60%] md:grid-rows-1 md:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden border border-white/10 bg-[#050505] shadow-2xl relative group">

                  {/* LEFT/TOP: Visuals */}
                  <div className="relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <motion.img

                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain grayscale-0 hover:grayscale transition-all duration-700"
                    />

                    {/* Floating ID */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="text-8xl font-display font-black text-white/10 leading-none">
                        {project.id}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT/BOTTOM: Details */}
                  <div className="relative flex flex-col justify-between p-6 md:p-16 bg-[#080808]/95 backdrop-blur-xl overflow-y-auto md:overflow-y-visible custom-scrollbar">

                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4 md:mb-6">
                        <div className="h-[1px] w-8 md:w-12 bg-[#c2a4ff]" />
                        <span className="text-[#c2a4ff] font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">{project.category}</span>
                      </div>

                      <h3 className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter mb-4 md:mb-8 leading-[0.9]">
                        {project.title}
                      </h3>

                      <p className="text-white/60 text-base md:text-xl font-light leading-relaxed mb-6 md:mb-12 max-w-xl">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                        {project.stack.map((tech, tIdx) => (
                          <span key={tIdx} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs text-white/50 font-mono uppercase tracking-wider hover:border-[#c2a4ff]/50 hover:text-white transition-colors cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10">
                      {project.link ? (
                        <Magnetic strength={0.3}>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 group/btn"
                          >
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-300">
                              <span className="text-xl md:text-2xl -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300">→</span>
                            </div>
                            <span className="text-[10px] md:text-sm font-mono tracking-[0.2em] text-white/50 uppercase group-hover/btn:text-white transition-colors">
                              View Deployment
                            </span>
                          </a>
                        </Magnetic>
                      ) : (
                        <div className="flex items-center gap-3 opacity-50 cursor-not-allowed">
                          <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                            <span className="text-xl">🔒</span>
                          </div>
                          <span className="text-sm font-mono tracking-[0.2em] text-white/30 uppercase">Confidential</span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            ))}

          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-[#c2a4ff] origin-left shadow-[0_0_15px_#c2a4ff]"
          />
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;