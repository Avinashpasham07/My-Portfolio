import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function SocialBar() {
  const [visible, setVisible] = useState(true);
  const [isInContact, setIsInContact] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      const rect = contactSection?.getBoundingClientRect();

      // ✅ Hide if Contact section visible
      if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
        setIsInContact(true);
        setVisible(false);
        return;
      } else {
        setIsInContact(false);
      }

      setVisible(false);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      const timeout = setTimeout(() => setVisible(true), 800);
      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  const icons = [
    { icon: <FaGithub />, link: "https://github.com/Avinashpasham07" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/avinashyadavpasham/" },
    { icon: <FaEnvelope />, link: "mailto:avinashyadav18@gmail.com" },
    
  ];

  return (
    <div
      className={`fixed left-4 sm:left-6 bottom-24 sm:bottom-50 flex flex-col gap-3 sm:gap-4 bg-[#121212]/80 backdrop-blur-lg p-2 sm:p-4 rounded-3xl sm:rounded-3xl border border-[#b88b4a30] shadow-lg z-50 transition-all duration-700 ease-in-out ${
        visible && !isInContact
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#1c1c1c] text-white hover:text-[#b88b4a] transition-all duration-300 hover:scale-110"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
