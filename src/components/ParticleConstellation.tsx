"use client";

import { useEffect, useRef, useState } from "react";

interface ParticleConstellationProps {
    particleCount?: number;
    connectionDistance?: number;
    mouseRadius?: number;
    color?: string;
}

export default function ParticleConstellation({
    particleCount = 80,
    connectionDistance = 120,
    mouseRadius = 150,
    color = "#F0B90B",
}: ParticleConstellationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Mobile detection
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        // Reduce particle count on mobile for performance
        const actualCount = isMobile ? Math.floor(particleCount * 0.4) : particleCount;
        const actualDistance = isMobile ? connectionDistance * 0.7 : connectionDistance;

        // Mouse position
        const mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        // Only track mouse on desktop
        if (!isMobile) {
            canvas.addEventListener("mousemove", handleMouseMove);
            canvas.addEventListener("mouseleave", handleMouseLeave);
        }

        // Particle class
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;

            constructor() {
                this.x = Math.random() * (canvas?.width ?? 0);
                this.y = Math.random() * (canvas?.height ?? 0);
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = isMobile ? 1.5 : 2;
            }

            update() {
                // Move towards mouse if nearby
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseRadius) {
                    const force = (mouseRadius - distance) / mouseRadius;
                    this.vx += (dx / distance) * force * 0.02;
                    this.vy += (dy / distance) * force * 0.02;
                }

                // Apply velocity
                this.x += this.vx;
                this.y += this.vy;

                // Damping
                this.vx *= 0.98;
                this.vy *= 0.98;

                // Boundaries with bounce
                if (!canvas) return;
                const canvasWidth = canvas.width;
                const canvasHeight = canvas.height;
                if (this.x < 0 || this.x > canvasWidth) {
                    this.vx *= -1;
                    this.x = Math.max(0, Math.min(canvasWidth, this.x));
                }
                if (this.y < 0 || this.y > canvasHeight) {
                    this.vy *= -1;
                    this.y = Math.max(0, Math.min(canvasHeight, this.y));
                }

                // Keep moving even without mouse
                if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.05;
                if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.05;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }

        // Create particles
        const particles: Particle[] = [];
        for (let i = 0; i < actualCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        let animationId: number;
        const animate = () => {
            if (!canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < actualDistance) {
                        const opacity = (1 - distance / actualDistance) * 0.3;
                        ctx.beginPath();
                        ctx.strokeStyle = `${color}${Math.floor(opacity * 255)
                            .toString(16)
                            .padStart(2, "0")}`;
                        ctx.lineWidth = isMobile ? 0.5 : 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener("resize", setCanvasSize);
            window.removeEventListener("resize", checkMobile);
            if (!isMobile) {
                canvas.removeEventListener("mousemove", handleMouseMove);
                canvas.removeEventListener("mouseleave", handleMouseLeave);
            }
            cancelAnimationFrame(animationId);
        };
    }, [isMobile, particleCount, connectionDistance, mouseRadius, color]);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
            style={{ opacity: isMobile ? 0.4 : 0.6 }}
        />
    );
}
