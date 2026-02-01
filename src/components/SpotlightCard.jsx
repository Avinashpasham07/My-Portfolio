import React from "react";
import HoverTilt from "./HoverTilt";

const SpotlightCard = ({ children, className = "" }) => {
    return (
        <HoverTilt className={className}>
            <div className="spotlight-container glass rounded-3xl p-8 relative group cursor-default h-full border border-white/5 overflow-hidden">
                <div className="relative z-10 h-full flex flex-col">
                    {children}
                </div>

                {/* Glow & Border Shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
        </HoverTilt>
    );
};

export default SpotlightCard;
