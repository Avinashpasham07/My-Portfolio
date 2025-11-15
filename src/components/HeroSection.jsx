import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <section className="
      min-h-screen 
      flex flex-col md:flex-row 
      items-center justify-center 
      relative overflow-hidden 
      text-[#3b2f2f]
      px-4 sm:px-6 md:px-20 lg:px-28 
      py-20 sm:py-24 
      bg-[#FAF7F2] 
      mt-6 
      gap-10 md:gap-20 lg:gap-28
    ">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#FAF7F2_100%)] opacity-95"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dot-grid.png')] opacity-10"></div>

      {/* LEFT SIDE */}
      <div className="
        flex-1 relative z-10 
        text-center md:text-left 
        space-y-5 sm:space-y-7 
        order-1 md:order-none
        w-full
      ">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#b88b4a]">
          Hello,
        </h1>

        <h1 className="
          momo-trust-display 
          text-3xl sm:text-5xl lg:text-6xl 
          font-extrabold text-[#3b2f2f]
        ">
          I'm Avinash Yadav
        </h1>

        <p className="
          text-[#3b2f2f]/80 
          text-sm sm:text-lg md:text-xl 
          leading-relaxed max-w-lg 
          mx-auto md:mx-0
        ">
          Full-Stack MERN Developer | API & Microservices | Scalable Web |
          Cloud Architecture{" "}
          <span className="text-[#b88b4a] font-semibold">
            Building Solutions That Solve Real-World Problems
          </span>
        </p>

        <div className="flex justify-center md:justify-start">
          <button
            onClick={() =>
              window.open("https://drive.google.com/file/d/1zPvXefFsT_QPDypJAFd8d-Wg0pPjunuA/preview", "_blank")
            }
            className="
              bg-[#b88b4a] text-white 
              px-7 sm:px-10 
              py-3 
              rounded-xl 
              border-2 border-[#b88b4a] 
              font-bold 
              hover:scale-105 transition 
              shadow-md
            "
          >
            Resume
          </button>
        </div>
      </div>

      {/* RIGHT SIDE - CODE BOX */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="
          flex-1 
          relative z-10 
          mt-10 md:mt-0 
          flex justify-center 
          w-full
        "
      >
        <div className="w-full flex justify-center">
          <div className="
            w-[95%] sm:w-[420px] md:w-[520px] 
            h-[260px] sm:h-[320px] md:h-[350px]
            rounded-2xl overflow-hidden 
            shadow-2xl 
            bg-[#1E1E2E] 
            text-gray-300 
            border border-[#2C2C3A]
          ">
            {/* Buttons */}
            <div className="flex items-center space-x-2 bg-[#2B2B3A] px-4 py-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>

            {/* Typed Text */}
            <div className="p-4 sm:p-6 text-xs sm:text-sm leading-relaxed overflow-hidden">
              <ReactTyped
                strings={[`<span class='text-[#569CD6]'>interface</span> DevProfile {<br/>
  &nbsp;&nbsp;<span class='text-[#9CDCFE]'>name</span>: <span class='text-[#CE9178]'>"Avinash Yadav"</span>;<br/>
  &nbsp;&nbsp;<span class='text-[#9CDCFE]'>role</span>: <span class='text-[#CE9178]'>"Full-Stack MERN Developer"</span>;<br/>
  &nbsp;&nbsp;<span class='text-[#9CDCFE]'>skills</span>: ["React","Node.js","Express","MongoDB"];<br/>
  &nbsp;&nbsp;<span class='text-[#9CDCFE]'>interests</span>: [
  "MERN Stack",
  "AI Apps",
  "Cloud",
  "UI/UX",
  "APIs",
  "System Design"
];
<br/>
  &nbsp;&nbsp;<span class='text-[#9CDCFE]'>goal</span>: "Beautiful & scalable apps";<br/>
}<br/><br/>
<span class='text-[#569CD6]'>export const</span> mission = () =><br/>
&nbsp;&nbsp;"Turning ideas into clean modern experiences 🚀";`]}
                typeSpeed={28}
                showCursor
                cursorChar="|"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
