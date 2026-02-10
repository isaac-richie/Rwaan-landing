"use client";

import { motion, useReducedMotion } from "framer-motion";

const pillars = [
  {
    label: "AI Market Intelligence",
    summary:
      "Prediction market signals, probabilistic insights, and smart alerts built for speed.",
    status: "In development",
  },
  {
    label: "Perpetual DEX",
    summary:
      "Low-latency execution layer with pricing, funding, and liquidity intelligence.",
    status: "In development",
  },
  {
    label: "Liquidity Staking",
    summary:
      "Structured yield access with transparent risk metrics and strategy tracking.",
    status: "Live",
  },
  {
    label: "Agentic Trading Terminal",
    summary:
      "Autonomous workflows for monitoring, execution, and adaptive market response.",
    status: "In development",
  },
];

export default function Metrics() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="analytics" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0B90B]/15 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              What we are
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Building the prediction markets intelligence layer.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            A focused suite for discovery, risk monitoring, and market assessment.
            Designed for teams who need clarity before capital.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((item, index) => (
            <motion.div
              key={item.label}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.5, ease: "easeOut", delay: index * 0.05 }
              }
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(240,185,11,0.08)] transition hover:-translate-y-1"
            >
              <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-[#F0B90B]/25 to-transparent blur-2xl transition group-hover:opacity-80" />
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-white">{item.label}</p>
                <span className="h-2 w-2 rounded-full bg-bnb-gold shadow-[0_0_10px_rgba(240,185,11,0.8)]" />
              </div>
              <p className="mt-4 text-sm text-white/65">{item.summary}</p>
              {item.status === "Live" ? (
                <span className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                  Live
                </span>
              ) : (
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/40">
                  {item.status}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
