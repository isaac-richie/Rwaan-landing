"use client";

import { motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden">
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
                : { duration: 0.6, ease: "easeOut", delay: 0.1 }
            }
            className="text-balance text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
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
          <div className="absolute -inset-4 -z-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-[0_0_60px_rgba(240,185,11,0.15)]" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-white/60">Prediction Signal</p>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300">
                Confidence ↑
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Market: Fed Rate Cut (Q3)</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Rawli
                </span>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-3">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/45">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-bnb-gold" />
                    Probability
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Confidence band
                  </span>
                </div>
                <div className="mt-3 h-36 w-full">
                  <svg
                    viewBox="0 0 360 160"
                    className="h-full w-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.2">
                      <path d="M20 20H340" stroke="#FFFFFF" strokeWidth="1" />
                      <path d="M20 60H340" stroke="#FFFFFF" strokeWidth="1" />
                      <path d="M20 100H340" stroke="#FFFFFF" strokeWidth="1" />
                      <path d="M20 140H340" stroke="#FFFFFF" strokeWidth="1" />
                      <path d="M20 20V140" stroke="#FFFFFF" strokeWidth="1" />
                      <path d="M100 20V140" stroke="#FFFFFF" strokeWidth="1" />
                      <path d="M180 20V140" stroke="#FFFFFF" strokeWidth="1" />
                      <path d="M260 20V140" stroke="#FFFFFF" strokeWidth="1" />
                      <path d="M340 20V140" stroke="#FFFFFF" strokeWidth="1" />
                    </g>
                    <path
                      d="M20 110 C60 96, 100 88, 140 76 C180 62, 220 64, 260 54 C300 45, 320 38, 340 32"
                      stroke="rgba(16,185,129,0.35)"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 110 C60 96, 100 88, 140 76 C180 62, 220 64, 260 54 C300 45, 320 38, 340 32"
                      stroke="#F0B90B"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <circle cx="340" cy="32" r="4.5" fill="#F0B90B" />
                    <circle cx="260" cy="54" r="3.5" fill="#F0B90B" opacity="0.8" />
                    <text x="26" y="18" fill="#FFFFFF" fontSize="9" opacity="0.5">
                      90%
                    </text>
                    <text x="26" y="66" fill="#FFFFFF" fontSize="9" opacity="0.5">
                      60%
                    </text>
                    <text x="26" y="146" fill="#FFFFFF" fontSize="9" opacity="0.5">
                      20%
                    </text>
                  </svg>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-white/50">Probability</p>
                  <p className="text-lg font-semibold text-white">63.7%</p>
                  <p className="text-xs text-emerald-300">+4.2% / 24h</p>
                </div>
                <div className="text-right">
                  <p className="text-white/50">Signal Score</p>
                  <p className="text-lg font-semibold text-emerald-300">High</p>
                  <p className="text-xs text-white/50">Confidence 0.82</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-3">
                <p className="text-white/50">Alert Trigger</p>
                <p className="text-lg font-semibold text-white">+2.5%</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-3">
                <p className="text-white/50">Execution Window</p>
                <p className="text-lg font-semibold text-white">9m</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
