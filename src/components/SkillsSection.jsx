
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

  // === Animated Floating Icons ===
  useEffect(() => {
    const icons = tagCloudRef.current.querySelectorAll(".icon-float");
    icons.forEach((icon, i) => {
      const angle = (i / icons.length) * 360;
      const x = 150 * Math.cos((angle * Math.PI) / 180);
      const y = 150 * Math.sin((angle * Math.PI) / 180);
      icon.style.transform = `translate(${x}px, ${y}px)`;
    });

    let angle = 0;
    const rotate = () => {
      angle += 0.2;
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
    <section className="min-h-screen -ml-50  flex flex-col md:flex-row items-center justify-center px-8 py-20">
      {/* Left Side - Animated Tech Icons */}
      <div className="relative flex-1 flex justify-center items-center h-[400px] md:h-[500px] mb-16 md:mb-0">
        <div
          ref={tagCloudRef}
          className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] transition-all duration-500"
        >
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
              className="icon-float absolute left-1/2 top-1/2 text-4xl text-[#5a4a4a] opacity-80"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Skill Cards */}
      <div className="flex-1 text-center md:text-left space-y-10">
        <h2 className="text-4xl font-bold text-[#3b2f2f]">
          Skills & <span className="text-[#b88b4a]">Technologies</span>
        </h2>

        {/* Skill Categories */}
        <div className="space-y-8">
          {[["Frontend", frontend], ["Backend", backend], ["Tools", tools]].map(
            ([title, items], i) => (
              <div key={i}>
                <h3 className="text-2xl font-semibold text-[#3b2f2f] mb-4">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {items.map(({ name, icon: Icon }, idx) => (
                    <div
                      key={idx}
                      className="px-5 py-3 bg-[#fff7eb]  rounded-2xl shadow-md flex items-center gap-3 hover:bg-[#f2e4d3] transition-all duration-300"
                    >
                      <Icon className="text-2xl text-[#3b2f2f] hover:text-[#b88b4a]" />
                      <span className="font-medium text-[#3b2f2f]">{name}</span>
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











 