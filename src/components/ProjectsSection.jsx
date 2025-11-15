import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Fin1 from "../assets/fin-1.png";
import Fin2 from "../assets/fin-2.png";
import Edu2 from "../assets/edu-2.png";
import Edu3 from "../assets/edu-3.png";
import Edu4 from "../assets/edu-4.png";


const ProjectCard = ({
  index,
  title,
  description,
  tech,
  images,
  projectLink,
  storyLink,
  reverse,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-20 bg-[#FAF7F2] text-[#3b2f2f]`}
    >
      {/* === LEFT CONTENT === */}
      <motion.div
        className={`flex-1 space-y-5 ${
          reverse ? "md:pl-10" : "md:pr-10"
        } text-center md:text-left`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <p className="text-[#b88b4a] text-lg font-medium">// {index}</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          {title}
        </h2>

        <p className="momo-trust-display text-[#5a4a4a] leading-relaxed max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
          {description}
        </p>

        {/* === TECH STACK === */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="px-4 py-1 border border-[#b88b4a] text-[#b88b4a] rounded-full text-sm hover:bg-[#b88b4a] hover:text-white transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* === CONDITIONAL BUTTONS === */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">

          {/* Show only if projectLink exists */}
          {projectLink && projectLink.trim() !== "" && (
            <a
              href={projectLink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#b88b4a] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#a3793e] transition-all text-sm sm:text-base"
            >
              ↗ View Project
            </a>
          )}

          {/* Show only if storyLink exists */}
          {storyLink && storyLink.trim() !== "" && (
            <a
              href={storyLink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#fff7eb] border border-[#b88b4a] px-6 py-3 rounded-lg font-semibold text-[#3b2f2f] hover:bg-[#f3e3cc] transition-all text-sm sm:text-base"
            >
              Code
            </a>
          )}

        </div>
      </motion.div>

      {/* === RIGHT IMAGE SLIDESHOW === */}
      <motion.div
        className="flex-1 flex justify-center mt-12 md:mt-0 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="relative w-[90%] sm:w-[80%] md:w-[500px] lg:w-[550px]">
          <div className="relative mx-auto bg-[#d6d2cb] rounded-t-[20px] border-[4px] border-[#bfb8ae] shadow-2xl overflow-hidden">
            <div className="relative bg-black rounded-t-[14px] p-3">
              <div className="flex justify-center mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mx-1" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full mx-1" />
                <div className="w-3 h-3 bg-green-500 rounded-full mx-1" />
              </div>

              {/* === FADE SLIDESHOW === */}
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={images[currentImage]}
                  alt={`${title} screenshot ${currentImage + 1}`}
                  className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-contain
 transition-all duration-1000"
                />
              </motion.div>
            </div>
          </div>
          <div className="w-full h-5 bg-[#bfb8ae] rounded-b-[8px] shadow-inner" />
        </div>
      </motion.div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      index: "01",
      title: "MemoRoam – Smart Stay Booking Platform",
      description:
        "A modern stay-booking platform allowing users to explore rooms, book stays, and manage listings. Built using the MERN stack with MapBox & secure payments.",
      tech: ["MongoDB", "Express", "React", "Node.js", "MapBox", "Stripe"],
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
      ],
      projectLink: "#",
      storyLink: "#",
      reverse: false,
    },
    {
  index: "02",
  title: "OnIT-India – Instant Local Help & Task Assistance Platform",
  description:
    "OnIT-India is a real-time platform that connects people who need help with trusted helpers nearby—instantly and with zero commission. Users can post tasks such as plumbing fixes, home cleaning, tutoring, moving assistance, or daily errands. Verified helpers in the area can respond immediately.",
  tech: [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "JWT Auth",
    "AI Matching"
  ],
  images: [
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=800&q=80"
  ],
  projectLink: "https://onitindia.com/",
  storyLink: "https://github.com/Avinashpasham07/Onitindia.git",
  reverse: true,
},

    {
      index: "03",
      title: "AI Finance Mentor",
      description:
        "An intelligent financial advisor that analyzes spending, savings & gives personalized guidance. Built using Flask + GPT models.",
      tech: ["Python", "Flask", "OpenAI API", "HTML", "CSS", "JS"],
      images: [
        Fin1,
        Fin2
      ],
      projectLink: "",
      storyLink: "#",
      reverse: true,
    },

{
  index: "04",
  title: "EduTutor AI – Smart Learning Assistant",
  description:
    "An AI-powered personalized learning system that generates lessons, quizzes, flashcards, and explanations instantly. Built using LangChain + Mixtral with a clean UI for students to study smarter and faster.",
  tech: ["React", "Streamlit", "LangChain", "Mixtral AI", "Python", "Flask"],
  images: [ Edu2, Edu3, Edu4],
  projectLink: "",
  storyLink: "https://github.com/Avinashpasham07/EduTutor-AI.git",
  reverse: false,
},



  ];

  return (
    <div className="bg-[#FAF7F2] py-20 px-4 sm:px-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-14 text-[#3b2f2f] tracking-tight">
        <span className="text-[#b88b4a]">//</span> My Projects{" "}
        <span className="text-[#b88b4a]">//</span>
      </h1>

      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  );
};

export default ProjectsSection;
