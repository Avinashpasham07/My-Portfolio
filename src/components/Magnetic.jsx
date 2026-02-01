import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Magnetic Component: Pulls children towards the cursor when nearby.
 * Inspired by high-end Awwwards portfolios.
 */
const Magnetic = ({ children, strength = 0.5 }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();

        // Calculate the center of the element
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center to cursor
        const x = (clientX - centerX) * (strength * 0.4); // Adjusted to make effective strength 0.2 when default strength is 0.5
        const y = (clientY - centerY) * (strength * 0.4); // Adjusted to make effective strength 0.2 when default strength is 0.5

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
