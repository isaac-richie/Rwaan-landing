"use client";

import { useRef, useState, ReactNode } from "react";

interface MagneticCardProps {
    children: ReactNode;
    className?: string;
    intensity?: number;
    glowColor?: string;
}

export default function MagneticCard({
    children,
    className = "",
    intensity = 15,
    glowColor = "#F0B90B",
}: MagneticCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [glowX, setGlowX] = useState(50);
    const [glowY, setGlowY] = useState(50);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate rotation based on mouse position
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const rotX = ((mouseY - centerY) / (rect.height / 2)) * -intensity;
        const rotY = ((mouseX - centerX) / (rect.width / 2)) * intensity;

        setRotateX(rotX);
        setRotateY(rotY);

        // Calculate glow position (normalized to 0-100)
        const glowXPos = ((mouseX - rect.left) / rect.width) * 100;
        const glowYPos = ((mouseY - rect.top) / rect.height) * 100;

        setGlowX(glowXPos);
        setGlowY(glowYPos);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotateX(0);
        setRotateY(0);
        setGlowX(50);
        setGlowY(50);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`magnetic-card-wrapper ${className}`}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: isHovering
                    ? "transform 0.1s ease-out"
                    : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                transformStyle: "preserve-3d",
                willChange: "transform",
            }}
        >
            <div className="magnetic-card-inner relative h-full w-full">
                {children}

                {/* Glow overlay that follows cursor */}
                <div
                    className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
                    style={{
                        opacity: isHovering ? 1 : 0,
                        background: `radial-gradient(600px circle at ${glowX}% ${glowY}%, ${glowColor}20, transparent 40%)`,
                    }}
                />

                {/* Edge glow */}
                {isHovering && (
                    <div
                        className="pointer-events-none absolute inset-0 rounded-[inherit]"
                        style={{
                            boxShadow: `0 0 20px ${glowColor}40`,
                            transition: "box-shadow 0.3s ease",
                        }}
                    />
                )}
            </div>

            <style jsx>{`
        .magnetic-card-wrapper {
          transform-origin: center;
        }

        /* Disable on mobile for better performance */
        @media (max-width: 768px) {
          .magnetic-card-wrapper {
            transform: none !important;
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .magnetic-card-wrapper {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
        </div>
    );
}
