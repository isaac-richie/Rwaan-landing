"use client";

import React, { useEffect, useState } from "react";

/**
 * High-performance CSS-only animated background with flowing lines
 * Optimized for mobile with zero lag
 */

interface AnimatedBackgroundCSSProps {
  intensity?: "low" | "medium" | "high";
}

// Extend CSSProperties to include CSS custom properties
type CSSPropertiesWithVars = React.CSSProperties & {
  [key: `--${string}`]: string | number;
};

export default function AnimatedBackgroundCSS({
  intensity = "medium",
}: AnimatedBackgroundCSSProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [lines, setLines] = useState<
    { delay: string; duration: string; startX: string; startY: string; angle: string }[]
  >([]);

  useEffect(() => {
    // Detect mobile on client side
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduce line count on mobile for better performance
  const desktopCount = intensity === "low" ? 3 : intensity === "medium" ? 5 : 8;
  const mobileCount = intensity === "low" ? 2 : intensity === "medium" ? 3 : 4;
  const lineCount = isMobile ? mobileCount : desktopCount;

  useEffect(() => {
    const generated = Array.from({ length: lineCount }).map((_, i) => ({
      delay: `${i * 2}s`,
      duration: `${12 + i * 2}s`,
      startX: `${Math.random() * 100}%`,
      startY: `${Math.random() * 100}%`,
      angle: `${Math.random() * 360}deg`,
    }));
    setLines(generated);
  }, [lineCount]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-40">
      {lines.map((line, i) => (
        <div
          key={i}
          className="animated-line"
          style={
            {
              "--delay": line.delay,
              "--duration": line.duration,
              "--start-x": line.startX,
              "--start-y": line.startY,
              "--angle": line.angle,
            } as CSSPropertiesWithVars
          }
        />
      ))}

      <style jsx>{`
        .animated-line {
          position: absolute;
          width: 200px;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(240, 185, 11, 0.4),
            transparent
          );
          border-radius: 2px;
          animation: flow var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
          transform: rotate(var(--angle));
          left: var(--start-x);
          top: var(--start-y);
          filter: blur(1px);
          /* GPU acceleration hints */
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        @keyframes flow {
          0% {
            transform: translate3d(-100%, 0, 0) rotate(var(--angle));
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate3d(100vw, -50px, 0) rotate(var(--angle));
            opacity: 0;
          }
        }

        /* Mobile optimization - reduce blur and simplify */
        @media (max-width: 768px) {
          .animated-line {
            filter: none;
            width: 150px;
          }
        }

        /* Respect user preferences */
        @media (prefers-reduced-motion: reduce) {
          .animated-line {
            animation: none;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
