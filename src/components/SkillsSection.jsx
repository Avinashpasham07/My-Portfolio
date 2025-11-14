import React, { useEffect, useRef } from "react";
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
  const tagCloudRef = useRef(null);

  useEffect(() => {
    const icons = tagCloudRef.current.querySelectorAll(".icon-float");
    // Responsive radius based on screen width
    let radius;
    if (window.innerWidth < 370) {
      radius = 55;
    } else if (window.innerWidth < 500) {
      radius = 75;
    } else if (window.innerWidth < 768) {
      radius = 105;
    } else {
      radius = 150;
    }
    icons.forEach((icon, i) => {
      const angle = (i / icons.length) * 360;
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);
      icon.style.transform = `translate(${x}px, ${y}px)`;
    });

    let angle = 0;
    const rotate = () => {
      angle += 0.18; // slightly slower for smoother mobile feel
      tagCloudRef.current.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(rotate);
    };
    rotate();
  }, []);

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
      {/* Left - Animated Icons */}
      <div className="relative flex-1 flex justify-center items-center
        h-[170px] xs:h-[210px] sm:h-[280px] md:h-[400px] mb-10 md:mb-0"
      >
        <div
          ref={tagCloudRef}
          className="
            relative
            w-[115px] xs:w-[160px] sm:w-[225px] md:w-[300px]
            h-[115px] xs:h-[160px] sm:h-[225px] md:h-[300px]
            transition-all duration-500
            overflow-visible
          ">
          {[
            SiReact,
            SiNextdotjs,
            SiJavascript,
            SiTailwindcss,
            SiHtml5,
            SiCss3,
            SiNodedotjs,
            SiExpress,
            SiMongodb,
            SiGit,
            SiGithub,
            SiFigma,
            SiLinux,
            SiVercel,
          ].map((Icon, index) => (
            <div
              key={index}
              className="
                icon-float absolute left-1/2 top-1/2
                text-lg xs:text-xl sm:text-2xl md:text-4xl
                text-[#5a4a4a] opacity-80
              "
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      {/* Right - Skill Cards */}
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
                      <span className="font-medium text-[#3b2f2f] text-xs xs:text-sm sm:text-base">{name}</span>
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
