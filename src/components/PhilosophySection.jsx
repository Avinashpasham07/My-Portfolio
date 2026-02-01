import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLaptopCode, FaBrain, FaServer, FaPaintBrush } from "react-icons/fa";

// Personalized Data for Avinash
const steps = [
    {
        id: "01",
        title: "Strategic Design",
        // referencing your UI/UX Internship at Fettle
        desc: "My process begins before code. Drawing from my UI/UX experience at Fettle, I architect user-centric flows and business logic that solve real problems, not just syntax errors.",
        icon: <FaPaintBrush />,
        color: "from-[#c2a4ff] to-[#7a4bd4]", // Purple Gradient
    },
    {
        id: "02",
        title: "MERN Architecture",
        // referencing your core stack
        desc: "I build robust, scalable systems using MongoDB, Express, React, and Node.js. creating seamless digital ecosystems like 'MemoRoam' that handle complex data with ease.",
        icon: <FaServer />,
        color: "from-[#4ade80] to-[#22c55e]", // Green Gradient
    },
    {
        id: "03",
        title: "AI Integration",
        // referencing your AI Finance & EduTutor projects
        desc: "Moving beyond basic CRUD. I integrate Neural Networks and LLMs to create intelligent applications like 'EduTutor AI' that adapt and learn from user behavior.",
        icon: <FaBrain />,
        color: "from-[#60a5fa] to-[#3b82f6]", // Blue Gradient
    },
    {
        id: "04",
        title: "Performance & Deploy",
        // referencing your optimization skills
        desc: "Code is only as good as its delivery. I focus on ultra-low latency, SEO optimization, and automated CI/CD pipelines to ensure instant global availability.",
        icon: <FaLaptopCode />,
        color: "from-[#f472b6] to-[#db2777]", // Pink Gradient
    },
];

const Card = ({ i, title, desc, id, icon, color, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className="flex flex-col relative -top-[25%] h-[450px] w-[90vw] md:w-[1000px] rounded-3xl p-10 md:p-16 border border-white/10 bg-[#050505] shadow-2xl origin-top overflow-hidden group"
            >
                {/* Colorful Gradient Backdrop */}
                <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${color} opacity-20 blur-[100px] rounded-full pointer-events-none group-hover:opacity-40 transition-opacity duration-500`} />

                {/* Header */}
                <div className="flex justify-between items-start z-10">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white text-xl">
                            {icon}
                        </span>
                        <span className="font-mono text-xs tracking-widest uppercase text-white/40">Step_0{i + 1}</span>
                    </div>
                    <span className="text-8xl font-display font-black text-white/5 select-none">{id}</span>
                </div>

                {/* Content */}
                <div className="mt-12 z-10 max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight">
                        {title}
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                        {desc}
                    </p>
                </div>

                {/* Progress Bar (Decorative) */}
                <div className="absolute bottom-10 left-16 right-16 h-[1px] bg-white/10">
                    <motion.div
                        style={{ scaleX: scrollYProgress }}
                        className={`h-full bg-gradient-to-r ${color} origin-left`}
                    />
                </div>

            </motion.div>
        </div>
    );
};

export default function Process() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={container} className="bg-[#030303] relative mt-32">
            {/* Section Intro */}
            <div className="h-[50vh] flex flex-col items-center justify-center sticky top-0 z-0">
                <span className="text-[#c2a4ff] font-mono text-xs tracking-[0.4em] uppercase mb-4">The Avinash Standard</span>
                <h2 className="text-[10vw] font-display font-black text-white leading-[0.8] uppercase tracking-tighter text-center">
                    THE <br /> <span className="text-white/20">BLUEPRINT.</span>
                </h2>
            </div>

            {/* Cards Container */}
            <div className="relative z-10 pb-[20vh]">
                {steps.map((step, i) => {
                    const targetScale = 1 - (steps.length - i) * 0.05;
                    return (
                        <Card
                            key={i}
                            i={i}
                            {...step}
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