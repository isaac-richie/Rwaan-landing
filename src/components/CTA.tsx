"use client";

import { motion, useReducedMotion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function CTA() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="waitlist" className="section-divider relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0B90B]/20 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }
          }
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-black/60 p-10 md:p-12"
        >
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-to-br from-[#F0B90B]/25 to-transparent blur-3xl" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Ready to deploy
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              Launch the Rwali terminal.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/60">
              One platform powering all the tools traders use. From market insights
              to trade execution all in one place. One platform powering all you
              need.
            </p>
            <WaitlistForm disabled disabledMessage="Waitlist opens soon." />
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://rwaan.gitbook.io/rawli-analytics/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-bnb-gold/50 hover:text-white"
              >
                Read Docs
                <span className="text-xs text-bnb-gold/80">↗</span>
              </a>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0xACB921bf2Dac2F7E8E101AAd9CA013d6Af5C648a"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-bnb-gold/20 bg-bnb-gold/10 px-4 py-2 text-sm font-semibold text-bnb-gold transition hover:border-bnb-gold/40"
              >
                Buy RWAAN
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
