import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const Cursor = () => {
    const [cursorVariant, setCursorVariant] = useState("default");
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position values
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // 1. IMPROVED PHYSICS: "Liquid" feel
    // Damping: 30 (stops oscillation), Stiffness: 300 (responsive), Mass: 0.5 (slight weight)
    const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        // Hide cursor when leaving the window
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", handleMouseEnter);

        const updateListeners = () => {
            // 1. INTERACTIVES (Buttons/Links) -> Cursor disappears or turns into small dot
            const interactives = document.querySelectorAll(
                'a, button, input, textarea, .nav-link, .magnetic-wrap, .social-icon, .pointer-hover'
            );

            // 2. TEXT ELEMENTS -> Cursor becomes the "Big Purple Spotlight"
            const textElements = document.querySelectorAll(
                'h1, h2, h3, h4, h5, h6, p, span, li, .text-hover'
            );

            interactives.forEach((el) => {
                el.addEventListener("mouseenter", () => setCursorVariant("interactive"));
                el.addEventListener("mouseleave", () => setCursorVariant("default"));
            });

            textElements.forEach((el) => {
                // Only apply text effect if it's NOT inside a button/link
                if (!el.closest("a") && !el.closest("button")) {
                    el.addEventListener("mouseenter", () => setCursorVariant("text"));
                    el.addEventListener("mouseleave", () => setCursorVariant("default"));
                }
            });
        };

        updateListeners();

        // Watch for DOM changes (like scrolling to new sections)
        const observer = new MutationObserver(updateListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            observer.disconnect();
        };
    }, [isVisible]);

    // 2. REFINED VARIANTS
    const variants = {
        default: {
            height: 16,
            width: 16,
            backgroundColor: "#c2a4ff",
            filter: "blur(0px)",
            opacity: 1,
            mixBlendMode: "difference", // Essential for the "invert" effect on white backgrounds
            scale: isClicked ? 0.8 : 1, // Click feedback
        },
        interactive: {
            height: 40,
            width: 40,
            backgroundColor: "#ffffff", // Turn white on buttons
            filter: "blur(0px)",
            opacity: 0.5,
            mixBlendMode: "difference",
            scale: isClicked ? 0.9 : 1,
        },
        text: {
            height: 150, // Massive size for the spotlight
            width: 150,
            backgroundColor: "#c2a4ff",
            filter: "blur(30px)", // Heavier blur for the "Glow" look
            opacity: 1,
            mixBlendMode: "difference", // This makes the text turn white/black inside the orb
            scale: isClicked ? 0.9 : 1,
        },
        hidden: {
            height: 0,
            width: 0,
            opacity: 0,
        }
    };

    return (
        <motion.div
            variants={variants}
            animate={isVisible ? cursorVariant : "hidden"}
            transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
                mass: 0.5
            }}
            style={{
                left: cursorX,
                top: cursorY,
                x: "-50%",
                y: "-50%",
                position: "fixed",
                pointerEvents: "none",
                zIndex: 9999,
                borderRadius: "50%",
            }}
        />
    );
};

export default Cursor;