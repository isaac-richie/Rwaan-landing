"use client";

import { motion, useReducedMotion } from "framer-motion";
import AnimatedBackgroundCSS from "@/components/AnimatedBackgroundCSS";
import ParticleConstellation from "@/components/ParticleConstellation";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden">
      {/* Interactive particle constellation */}
      <ParticleConstellation particleCount={80} connectionDistance={120} />

      {/* Subtle animated flowing lines */}
      <AnimatedBackgroundCSS intensity="low" />

      {/* Mesh gradient for depth */}
      <div className="mesh-gradient -z-20" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0B90B]/20 to-transparent blur-3xl sm:from-[#F0B90B]/25" />
        <div className="absolute right-10 top-32 h-72 w-72 rounded-full bg-gradient-to-tr from-[#F0B90B]/15 to-transparent blur-3xl sm:from-[#F0B90B]/20" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gradient-to-br from-[#F0B90B]/10 to-transparent blur-3xl sm:from-[#F0B90B]/15" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 md:flex-row md:items-center md:justify-between md:pt-28">
        <div className="max-w-xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={
              prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }
            }
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
          >
            BNB Chain DeFi Intelligence
          </motion.div>

          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.7, ease: "easeOut", delay: 0.1 }
            }
            className="gradient-shimmer text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Rawli Analytics
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: "easeOut", delay: 0.2 }
            }
            className="mt-5 text-base leading-relaxed text-white/70 md:text-lg"
          >
            Discover, analyze, and track prediction markets with AI-powered analytics,
            real-time insights, and intelligent alerts. Where intelligence meets prediction
            — executed with precision and integrated DeFi opportunities.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: "easeOut", delay: 0.3 }
            }
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://rwaan.gitbook.io/rawli-analytics/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              Read Docs
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }
          }
          className="relative w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_0_50px_rgba(240,185,11,0.15)] ring-1 ring-white/5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,_rgba(240,185,11,0.18),_transparent_55%)]" />
            <img
              src="/terminal-demo.png"
              alt="Rawli Analytics Terminal - Live Polymarket Analysis"
              className="w-full h-auto object-cover mix-blend-multiply"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
