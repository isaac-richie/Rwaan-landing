"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import AnimatedBackgroundCSS from "@/components/AnimatedBackgroundCSS";

export default function Preview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-divider relative overflow-hidden py-16 sm:py-20">
      <AnimatedBackgroundCSS intensity="medium" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-12 h-64 w-64 rounded-full bg-gradient-to-br from-[#F0B90B]/15 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Platform Preview
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              The Rawli terminal, engineered for clarity.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            A clean, data-dense workspace built for decision velocity.
            Track signals, risk, and execution context in one view.
          </p>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }
          }
          className="grid gap-6 md:grid-cols-[1.4fr_1fr]"
        >
          <div className="card-glow relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-black/60 p-4 ring-1 ring-white/5 transform-gpu will-change-transform">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#F0B90B]/20 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/50 ring-1 ring-white/5">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2 sm:px-4 sm:py-3">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                </div>
                <div className="ml-2 flex-1 truncate rounded-md border border-white/10 bg-black/30 px-2 py-1 text-[10px] text-white/40 sm:ml-4 sm:px-3 sm:text-[11px]">
                  app.rawlianalytics.io
                </div>
                <span className="hidden shrink-0 rounded-full border border-bnb-gold/40 bg-bnb-gold/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-bnb-gold sm:inline-flex">
                  Prototype
                </span>
              </div>
              <Image
                src="/work.png"
                alt="Rawli Analytics terminal preview"
                width={1200}
                height={760}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="card-glow rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/5 transform-gpu will-change-transform">
              <p className="text-sm text-white/60">Watchlist Intelligence</p>
              <p className="mt-3 text-lg font-semibold text-white">
                Track your high-impact markets with AI alerts.
              </p>
              <p className="mt-2 text-sm text-white/60">
                Real-time probability shifts, liquidity spikes, and execution windows.
              </p>
            </div>
            <div className="card-glow rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/5 transform-gpu will-change-transform">
              <p className="text-sm text-white/60">Execution Context</p>
              <p className="mt-3 text-lg font-semibold text-white">
                Funded routes, slippage bounds, and venue scoring.
              </p>
              <p className="mt-2 text-sm text-white/60">
                Every trade is evaluated against risk and timing thresholds.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
