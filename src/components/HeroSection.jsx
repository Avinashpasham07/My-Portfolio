import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { SiGithub, SiLinkedin, SiGmail, SiWhatsapp } from "react-icons/si";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden text-[#3b2f2f] px-6 sm:px-10 md:px-20 lg:px-28 py-24 bg-[#FAF7F2] mt-8 gap-10 md:gap-20 lg:gap-28">
      {/* ==== Background ==== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#FAF7F2_100%)] opacity-95"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dot-grid.png')] opacity-10"></div>

      {/* ==== LEFT CONTENT ==== */}
      <div className="flex-1 relative z-10 ml-20 text-center md:text-left space-y-6 sm:space-y-8 order-1 md:order-none px-3 sm:px-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#b88b4a] leading-snug">
          Hello,
        </h1>
        <h1 className="momo-trust-display text-4xl sm:text-5xl lg:text-6xl -mt-3 sm:-mt-5 font-extrabold text-[#3b2f2f] leading-tight">
          I'm Avinash Yadav
        </h1>

        <p className="text-[#3b2f2f]/80 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed px-2 sm:px-0">
          Full-Stack MERN Developer | API & Microservices | Scalable Web |
          Cloud Architecture |{" "}
          <span className="text-[#b88b4a] font-semibold">
            Building Solutions That Solve Real-World Problems
          </span>
        </p>

        {/* ==== Resume Button ==== */}
        <div className="flex justify-center md:justify-start px-2 sm:px-0">
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1zPvXefFsT_QPDypJAFd8d-Wg0pPjunuA/preview",
                "_blank"
              )
            }
            className="bg-[#b88b4a] text-white px-8 sm:px-10 py-3 rounded-xl border-2 border-[#b88b4a] font-bold hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Resume
          </button>
        </div>
      </div>

      {/* ==== RIGHT SIDE (TYPING CONSOLE) ==== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 relative z-10 mt-16 md:mt-0 flex justify-center order-2 md:order-none w-full"
      >
        {/* ==== Console Container ==== */}
        <div className="w-full flex justify-center px-6 sm:px-8 md:px-0">
          <div className="w-[500px] md:w-[540px] h-[350px] rounded-2xl overflow-hidden shadow-2xl bg-[#1E1E2E] text-gray-300 font-mono border border-[#2C2C3A]">
            {/* Top Bar */}
            <div className="flex items-center space-x-2 bg-[#2B2B3A] px-4 py-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>

            {/* Typed Code */}
            <div className="p-6 text-sm leading-relaxed">
              <ReactTyped
               strings={[
  `<span class='text-[#569CD6]'>interface</span> DevProfile {<br/>
  &nbsp;&nbsp;<span class='text-[#9CDCFE]'>name</span>: <span class='text-[#CE9178]'>"Avinash Yadav"</span>;<br/>
  &nbsp;&nbsp;<span class='text-[#9CDCFE]'>role</span>: <span class='text-[#CE9178]'>"Full-Stack MERN Developer"</span>;<br/>
  &nbsp;&nbsp;<span class='text-[#9CDCFE]'>skills</span>: [<span class='text-[#CE9178]'>"React"</span>, <span class='text-[#CE9178]'>"Node.js"</span>, <span class='text-[#CE9178]'>"Express"</span>, <span class='text-[#CE9178]'>"MongoDB"</span>];<br/>
  &nbsp;&nbsp;<span class='text-[#9CDCFE]'>interests</span>: [<span class='text-[#CE9178]'>"UI/UX"</span>, <span class='text-[#CE9178]'>"AI Integrations"</span>, <span class='text-[#CE9178]'>"Cloud"</span>];<br/>
  &nbsp;&nbsp;<span class='text-[#9CDCFE]'>goal</span>: <span class='text-[#CE9178]'>"Build beautiful & scalable apps"</span>;<br/>
  }<br/><br/>

  <span class='text-[#569CD6]'>export const</span> <span class='text-[#9CDCFE]'>mission</span> = () =><br/>
  &nbsp;&nbsp;<span class='text-[#CE9178]'>"Turning ideas into clean, fast & modern web experiences 🚀"</span>;
  `
]}

                typeSpeed={30}
                showCursor={true}
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
