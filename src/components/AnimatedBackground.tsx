"use client";

import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
    intensity?: "low" | "medium" | "high";
    color?: string;
}

export default function AnimatedBackground({
    intensity = "medium",
    color = "#F0B90B",
}: AnimatedBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to match container
        const setCanvasSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        // Line configuration based on intensity
        const lineCount = intensity === "low" ? 3 : intensity === "medium" ? 5 : 8;
        const speedMultiplier =
            intensity === "low" ? 0.5 : intensity === "medium" ? 1 : 1.5;

        // Create flowing lines
        const lines: Array<{
            x: number;
            y: number;
            length: number;
            angle: number;
            speed: number;
            opacity: number;
        }> = [];

        for (let i = 0; i < lineCount; i++) {
            lines.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                length: 100 + Math.random() * 200,
                angle: Math.random() * Math.PI * 2,
                speed: (0.3 + Math.random() * 0.7) * speedMultiplier,
                opacity: 0.15 + Math.random() * 0.25,
            });
        }

        // Animation loop
        let animationId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            lines.forEach((line) => {
                // Update position
                line.x += Math.cos(line.angle) * line.speed;
                line.y += Math.sin(line.angle) * line.speed;

                // Wrap around edges
                if (line.x > canvas.width + line.length) line.x = -line.length;
                if (line.x < -line.length) line.x = canvas.width + line.length;
                if (line.y > canvas.height + line.length) line.y = -line.length;
                if (line.y < -line.length) line.y = canvas.height + line.length;

                // Draw gradient line
                const gradient = ctx.createLinearGradient(
                    line.x,
                    line.y,
                    line.x + Math.cos(line.angle) * line.length,
                    line.y + Math.sin(line.angle) * line.length
                );

                gradient.addColorStop(0, `${color}00`);
                gradient.addColorStop(0.5, `${color}${Math.floor(line.opacity * 255).toString(16).padStart(2, "0")}`);
                gradient.addColorStop(1, `${color}00`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.lineCap = "round";

                ctx.beginPath();
                ctx.moveTo(line.x, line.y);
                ctx.lineTo(
                    line.x + Math.cos(line.angle) * line.length,
                    line.y + Math.sin(line.angle) * line.length
                );
                ctx.stroke();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener("resize", setCanvasSize);
            cancelAnimationFrame(animationId);
        };
    }, [intensity, color]);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
            style={{ opacity: 0.6 }}
        />
    );
}
