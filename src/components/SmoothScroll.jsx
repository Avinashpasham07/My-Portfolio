// src/components/SmoothScroll.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,        // Smoothness speed
      easing: (t) => t,     // Easing function
      smoothWheel: true,
      smoothTouch: false,   // Disable on touch (you can make it true if you want)
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
