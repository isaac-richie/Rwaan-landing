"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function Preview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-divider relative py-16 sm:py-20">
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
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-black/60 p-4 ring-1 ring-white/5 transform-gpu will-change-transform">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#F0B90B]/20 to-transparent blur-2xl" />
            <div className="flex items-center justify-between px-2 pb-4 pt-2">
              <p className="text-sm text-white/60">Rawli Terminal Preview</p>
              <span className="rounded-full border border-bnb-gold/40 bg-bnb-gold/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-bnb-gold">
                Prototype
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/50 ring-1 ring-white/5">
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
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/5 transform-gpu will-change-transform">
              <p className="text-sm text-white/60">Watchlist Intelligence</p>
              <p className="mt-3 text-lg font-semibold text-white">
                Track your high-impact markets with AI alerts.
              </p>
              <p className="mt-2 text-sm text-white/60">
                Real-time probability shifts, liquidity spikes, and execution windows.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/5 transform-gpu will-change-transform">
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
