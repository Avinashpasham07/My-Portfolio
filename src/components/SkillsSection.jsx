import React from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
} from "react-icons/si";

const SkillsSection = () => {
  const frontend = [
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
  ];

  const backend = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Postman", icon: SiPostman },
    { name: "Docker", icon: SiDocker },
  ];

  const tools = [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Figma", icon: SiFigma },
    { name: "Linux", icon: SiLinux },
    { name: "Vercel", icon: SiVercel },
  ];

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center
      px-3 sm:px-6 md:px-16 lg:px-24 py-10 md:py-20"
    >

      {/* LEFT SIDE — LOTTIE ANIMATION */}
      <div className="flex-1 flex justify-center items-center h-[250px] sm:h-[320px] md:h-[420px] mb-10 md:mb-0">
        <iframe
          src="https://lottie.host/embed/563176e4-514d-4f2e-9c76-b120b31882ac/X144xeZXmO.lottie"
          style={{
            width: "100%",
            maxWidth: "360px",
            height: "100%",
            border: "none",
          }}
        ></iframe>

      </div>

      {/* RIGHT SIDE — SKILL CARDS */}
      <div className="flex-1 w-full text-center md:text-left space-y-8">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#3b2f2f]">
          Skills <span className="text-[#b88b4a]">& Technologies</span>
        </h2>

        <div className="space-y-7">
          {[["Frontend", frontend], ["Backend", backend], ["Tools", tools]].map(
            ([title, items], i) => (
              <div key={i}>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-[#3b2f2f] mb-2">
                  {title}
                </h3>

                <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 justify-center md:justify-start">
                  {items.map(({ name, icon: Icon }, idx) => (
                    <div
                      key={idx}
                      className="
                        px-3 xs:px-4 py-2 sm:px-5 sm:py-3
                        bg-[#fff7eb] rounded-2xl shadow
                        flex items-center gap-2 sm:gap-3
                        hover:bg-[#f2e4d3] transition-all duration-300
                      "
                    >
                      <Icon className="text-base xs:text-lg sm:text-2xl text-[#3b2f2f] hover:text-[#b88b4a]" />
                      <span className="font-medium text-[#3b2f2f] text-xs xs:text-sm sm:text-base">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
