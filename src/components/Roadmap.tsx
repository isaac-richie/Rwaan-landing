"use client";

import { motion, useReducedMotion } from "framer-motion";

const phases = [
  {
    title: "Phase 1 — Foundation",
    status: "Completed",
    points: [
      "Core token contracts on BSC",
      "Tokenomics architecture + utility mapping",
      "Brand system, website, and documentation",
      "Testnet deployment for staking + token",
      "Internal security review and optimization",
    ],
  },
  {
    title: "Phase 2 — Staking & Liquidity",
    status: "Completed",
    points: [
      "Staking dashboard with rewards tracking",
      "Closed beta for staking tiers and yield flows",
      "AMM liquidity modules and stress testing",
      "Strategic marketing activation",
    ],
  },
  {
    title: "Phase 3 — Token Launch & Expansion (Q1 2026)",
    status: "Completed",
    points: [
      "Public $RWAAN launch on BSC",
      "2% buy/sell tax activation",
      "Phase 1 staking pools (30–90d / 180–365d)",
      "Tier‑3 → Tier‑2 exchange listings",
      "First Reward Distribution Event (RDE)",
    ],
  },
  {
    title: "Phase 4 — Prediction Market Launch (Q2 2026)",
    status: "Upcoming",
    points: [
      "Rawli Prediction Market launch",
      "AI‑powered prediction assistant integration",
      "Market creation suite + liquidity reinforcement",
      "UX upgrade and live forecasting",
    ],
  },
];

const statusStyles: Record<string, string> = {
  Completed: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  "In Progress": "border-bnb-gold/40 bg-bnb-gold/10 text-bnb-gold",
  Upcoming: "border-white/20 bg-white/5 text-white/70",
};

export default function Roadmap() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-divider relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-10 top-12 h-64 w-64 rounded-full bg-gradient-to-br from-[#F0B90B]/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Roadmap
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              A phased rollout toward live prediction markets.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            Each phase strengthens core infrastructure, liquidity, and market
            intelligence before full launch.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.5, ease: "easeOut", delay: index * 0.05 }
              }
              className="card-glow rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5 transform-gpu will-change-transform"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                <span
                  className={`rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${
                    statusStyles[phase.status]
                  }`}
                >
                  {phase.status}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {phase.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-bnb-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
