"use client";

import { motion, useReducedMotion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function CTA() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="waitlist" className="relative py-20 sm:py-24">
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
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Launch the Rwali terminal.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/60">
              Access the Rawli analytics platform to connect your wallet, organize
              watchlists, and analyze on-chain prediction markets with real-time
              probability data, risk signals, and execution context — built on BNB
              Chain.
            </p>
            <WaitlistForm />
            <div className="mt-6">
              <a
                href="https://rwaan.gitbook.io/rawli-analytics/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-white/70 transition hover:text-white"
              >
                Read Docs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
