"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const faqs = [
  {
    q: "Is Rawli Analytics live today?",
    a: "The analytics platform is in active development. Liquidity Staking is live, and select intelligence modules are in private access.",
  },
  {
    q: "Which wallets are supported?",
    a: "We support major EVM wallets on BNB Chain. Wallet connections remain non-custodial.",
  },
  {
    q: "What data sources do you use?",
    a: "Today, data is sourced from Polymarket. We are extending coverage to additional prediction markets and on-chain venues.",
  },
  {
    q: "How do alerts work?",
    a: "Alerts can be configured by probability, volatility, liquidity thresholds, and execution conditions.",
  },
  {
    q: "Is there a token utility?",
    a: "Token utilities will be tied to platform access, staking benefits, and advanced analytics tiers.",
  },
];

export default function FAQ() {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-divider relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-16 top-8 h-64 w-64 rounded-full bg-gradient-to-br from-[#F0B90B]/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Answers before you commit.
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Clear, direct responses to the questions we hear most.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className="card-glow rounded-2xl border border-white/10 bg-white/5 px-5 py-4 ring-1 ring-white/5 transform-gpu will-change-transform"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left text-sm font-semibold text-white sm:text-base"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm text-white/60">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
