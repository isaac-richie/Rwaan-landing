"use client";

import { motion, useReducedMotion } from "framer-motion";
import AnimatedBackgroundCSS from "@/components/AnimatedBackgroundCSS";
import MagneticCard from "@/components/MagneticCard";

const pillars = [
  {
    label: "Liquidity Staking",
    summary:
      "Structured yield access with transparent risk metrics and strategy tracking.",
    status: "Live",
  },
  {
    label: "RawliDEX",
    summary:
      "A perpetual DEX with an agentic trading terminal for autonomous execution, liquidity intelligence, and strategy automation.",
    status: "In development",
  },
  {
    label: "RawliCast",
    summary:
      "A real-time AI Market Intelligence Engine that continuously scans crypto markets, interprets price structure, evaluates sentiment flow, analyzes volatility cycles, and models risk to deliver actionable insights.",
    status: "In development",
  },
  {
    label: "RawliPredict",
    summary:
      "A dedicated prediction market engine for outcome forecasting, sentiment mapping, and event‑impact modeling. It fuses historical data, live market signals, and on‑chain flows to surface edge before consensus forms.",
    status: "In development",
  },
];

export default function Metrics() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="analytics" className="section-divider relative overflow-hidden py-16 sm:py-20">
      <AnimatedBackgroundCSS intensity="medium" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0B90B]/15 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              What we are
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              Building the prediction markets intelligence layer.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            A focused suite for discovery, risk monitoring, and market assessment.
            Designed for teams who need clarity before capital.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((item, index) => {
            const isStaking = item.label === "Liquidity Staking";
            const cardContent = (
              <MagneticCard key={item.label} intensity={12} glowColor="#F0B90B">
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.5, ease: "easeOut", delay: index * 0.05 }
                  }
                  className="card-glow group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(240,185,11,0.08)] ring-1 ring-white/5 transform-gpu will-change-transform"
                >
                  <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-[#F0B90B]/25 to-transparent blur-2xl transition group-hover:opacity-80" />
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-white">{item.label}</p>
                    <span className="pulse-dot h-2 w-2 rounded-full bg-bnb-gold shadow-[0_0_10px_rgba(240,185,11,0.8)]" />
                  </div>
                  <p className="mt-4 text-sm text-white/65">{item.summary}</p>
                  {item.status === "Live" ? (
                    <span className="holographic mt-6 inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                      <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                      Live
                    </span>
                  ) : (
                    <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/40">
                      {item.status}
                    </p>
                  )}
                </motion.div>
              </MagneticCard>
            );

            if (!isStaking) return cardContent;

            return (
              <a
                key={`${item.label}-link`}
                href="https://www.stakingrawlianalytics.app"
                target="_blank"
                rel="noreferrer"
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B90B]"
                aria-label="Open Rawli Analytics staking app"
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
