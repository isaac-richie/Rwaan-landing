"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ecosystemCards = [
  {
    name: "BNB Chain",
    note: "Core network infrastructure",
  },
  {
    name: "Polymarket",
    logo: "/partners/polymarket.png",
    note: "Primary data source",
    logoClass: "h-6",
  },
  {
    name: "PancakeSwap",
    logo: "/partners/pancakeswap.svg",
    note: "Execution venue",
    logoClass: "h-7",
  },
  {
    name: "Dexscreener",
    note: "Market data feeds",
  },
  {
    name: "Supabase",
    note: "Infrastructure & storage",
  },
  {
    name: "Resend",
    note: "Operational messaging",
  },
];

export default function Partnerships() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-divider relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-12 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#F0B90B]/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Ecosystem
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              Built on trusted infrastructure.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            Logos shown indicate ecosystem alignment or data sources, not endorsement.
          </p>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ecosystemCards.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/5"
            >
              {partner.logo ? (
                <div className="flex h-12 w-full items-center justify-start overflow-hidden rounded-2xl border border-white/10 bg-black/20 px-4">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={220}
                    height={64}
                    className={`w-auto object-contain opacity-95 ${partner.logoClass ?? "h-7"}`}
                  />
                </div>
              ) : (
                <span className="text-base font-semibold text-white/90">
                  {partner.name}
                </span>
              )}
              <span className="text-xs uppercase tracking-[0.2em] text-white/45">
                {partner.note}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
