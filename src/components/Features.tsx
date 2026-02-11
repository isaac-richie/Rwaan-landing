"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Radar, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    title: "RawliPredict",
    description:
      "Prediction market engine with AI‑driven outcome forecasting, sentiment mapping, and event‑impact modeling for early edge.",
    icon: Sparkles,
  },
  {
    title: "RawliDEX",
    description:
      "Perpetual DEX with an agentic trading terminal for autonomous execution, liquidity intelligence, and strategy automation.",
    icon: Activity,
  },
  {
    title: "RawliCast",
    description:
      "AI market intelligence companion that interprets price structure, sentiment flow, and volatility cycles to deliver actionable insights.",
    icon: ShieldCheck,
  },
  {
    title: "Token Utility",
    description:
      "RWAAN powers access tiers, staking incentives, and future execution advantages. Utility is designed around measurable platform usage.",
    icon: Radar,
  },
];

export default function Features() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="perpdex" className="section-divider relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-[#F0B90B]/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Product Suite
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Tools engineered for high-velocity prediction markets.
          </h2>
          <p className="max-w-2xl text-sm text-white/60">
            Rwali combines institutional-grade data with on-chain execution
            to support structured analysis, ongoing risk monitoring, and
            high-confidence market assessment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
            <motion.div
              key={feature.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.55, ease: "easeOut", delay: index * 0.06 }
              }
              className="card-glow group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5 transition hover:-translate-y-1 transform-gpu will-change-transform"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-gradient-to-br from-[#F0B90B]/20 to-transparent blur-2xl" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-bnb-gold shadow-[0_0_25px_rgba(240,185,11,0.25)] backdrop-blur ring-1 ring-bnb-gold/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/60">
                    {feature.description}
                  </p>
                </div>
                <span className="ml-4 mt-1 h-2 w-2 rounded-full bg-bnb-gold shadow-[0_0_10px_rgba(240,185,11,0.7)]" />
              </div>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-white/30 to-transparent" />
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
                Learn more
              </p>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
