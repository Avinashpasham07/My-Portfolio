import React, { useEffect, useRef, useState } from "react";
import avatar from "../assets/image.png";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      <div
        className="flex items-center justify-between gap-4 sm:gap-6 md:gap-8 
                   px-4 sm:px-6 md:px-8 py-2 sm:py-3 
                   rounded-full bg-[#1c1c1c]/80 backdrop-blur-md 
                   border border-[#b88b4a50] shadow-lg 
                   text-[#FAF7F2] font-medium text-xs sm:text-sm md:text-base 
                   w-[90vw] sm:w-auto max-w-[500px]"
      >
        {/* === Avatar === */}
        
        <img
          src={avatar}
          alt="Avatar"
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-[#b88b4a] 
                     cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => scrollToSection("hero")}
        />

        {/* === Navigation Links === */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-[#b88b4a] cursor-pointer transition-colors duration-300"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
