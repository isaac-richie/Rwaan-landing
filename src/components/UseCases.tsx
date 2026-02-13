"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Coins, Globe, Search, UserCircle } from "lucide-react";
import AnimatedBackgroundCSS from "@/components/AnimatedBackgroundCSS";

const useCases = [
  {
    title: "Traders",
    icon: UserCircle,
    points: [
      "AI‑driven outcome forecasting with confidence scoring",
      "Sentiment mapping across live markets and on‑chain flows",
      "Event impact modeling to anticipate catalysts",
      "Probability curves and EV scoring for timing entries/exits",
    ],
  },
  {
    title: "Analysts & Researchers",
    icon: Search,
    points: [
      "Structured intelligence from fragmented prediction data",
      "Liquidity shifts, sentiment cycles, and volatility regimes",
      "Model‑based signals for faster, evidence‑backed decisions",
      "Scenario analysis and risk framing across outcomes",
    ],
  },
  {
    title: "AI Power Users",
    icon: Bot,
    points: [
      "Agent‑assisted research and forecasting workflows",
      "Automated signal interpretation with risk context",
      "Actionable summaries from multi‑source market data",
      "Adaptive insights that learn from changing conditions",
    ],
  },
  {
    title: "Stakers & Yield Seekers",
    icon: Coins,
    points: [
      "Transparent staking tiers and reward mechanics",
      "Liquidity‑backed incentives for sustainable yield",
      "Clear performance signals and risk framing",
      "Long‑term alignment with platform growth",
    ],
  },
  {
    title: "Event‑Driven Communities",
    icon: Globe,
    points: [
      "Prediction markets around major global events",
      "Collective sentiment and probability tracking",
      "Accessible tools to forecast outcomes together",
      "Real‑time market shifts and momentum visibility",
    ],
  },
];

export default function UseCases() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-divider relative overflow-hidden py-16 sm:py-20">
      <AnimatedBackgroundCSS intensity="medium" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-8 top-8 h-64 w-64 rounded-full bg-gradient-to-br from-[#F0B90B]/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Use Cases
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              Built for decision‑makers, not just data viewers.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            Rawli helps traders and researchers move faster with signal‑level clarity,
            context, and execution readiness.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
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
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-bnb-gold shadow-[0_0_25px_rgba(240,185,11,0.25)] backdrop-blur ring-1 ring-bnb-gold/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-bnb-gold" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
