"use client";

import { ShieldCheck, Lock, FileCheck, Eye } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedBackgroundCSS from "@/components/AnimatedBackgroundCSS";

const items = [
  {
    title: "Non-custodial by design",
    description: "Your wallet stays in your control. We never custody funds.",
    icon: Lock,
  },
  {
    title: "Risk-first analytics",
    description: "Every signal includes risk scoring and volatility context.",
    icon: ShieldCheck,
  },
  {
    title: "Audit-ready operations",
    description: "Transparent, verifiable data sourcing with clear methodologies.",
    icon: FileCheck,
  },
  {
    title: "On-chain visibility",
    description: "Full provenance of predictions, liquidity, and execution context.",
    icon: Eye,
  },
];

export default function Security() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-divider relative overflow-hidden py-16 sm:py-20">
      <AnimatedBackgroundCSS intensity="low" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-[#F0B90B]/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Security & Trust
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              Built for risk-aware operators.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            We prioritize transparency, non-custodial workflows, and verifiable data
            integrity across the BNB Chain ecosystem.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => {
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
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-bnb-gold shadow-[0_0_25px_rgba(240,185,11,0.25)] backdrop-blur ring-1 ring-bnb-gold/30">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/60">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
