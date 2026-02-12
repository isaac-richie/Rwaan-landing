"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "RawliCast", href: "#analytics", comingSoon: true },
  { label: "RawliPredict", href: "#perpdex", comingSoon: true },
  { label: "RawliDEX", href: "https://perp-dex-teal.vercel.app", external: true },
  { label: "Staking", href: "https://www.stakingrawlianalytics.app", external: true },
];

export default function Navbar() {
  const prefersReducedMotion = useReducedMotion();
  const comingSoonLinks = useMemo(
    () => links.filter((link) => link.comingSoon).map((link) => link.label),
    []
  );
  const [activeSoon, setActiveSoon] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!activeSoon) return;
    const timer = setTimeout(() => setActiveSoon(null), 1500);
    return () => clearTimeout(timer);
  }, [activeSoon]);

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { y: -12, opacity: 0 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
      transition={
        prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }
      }
      className="sticky top-0 z-50 border-b border-white/10 bg-bnb-black/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
        <Link href="#" className="flex items-center gap-3 sm:gap-4">
          <span className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_0_28px_rgba(240,185,11,0.28)] sm:h-[75px] sm:w-[75px]">
            <Image
              src="/logo.png"
              alt="Rawli Analytics logo"
              fill
              className="object-cover"
              priority
            />
          </span>
          <span className="text-lg font-semibold tracking-tight">Rawli Analytics</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {links.map((link) => {
            const isSoon = comingSoonLinks.includes(link.label);
            return (
              <div key={link.label} className="relative flex items-center">
                {link.href.startsWith("#") ? (
                  <a
                    href={link.href}
                    onClick={(event) => {
                      if (!isSoon) return;
                      event.preventDefault();
                      setActiveSoon(link.label);
                    }}
                    className={
                    link.label === "RawliCast" || link.label === "RawliPredict"
                        ? "group flex items-center gap-2 font-semibold text-bnb-white transition-colors hover:text-bnb-white"
                        : "group flex items-center gap-2 transition-colors hover:text-bnb-white"
                    }
                  >
                    <span>{link.label}</span>
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={(event) => {
                      if (!isSoon) return;
                      event.preventDefault();
                      setActiveSoon(link.label);
                    }}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className={
                    link.label === "RawliCast" || link.label === "RawliPredict"
                        ? "group flex items-center gap-2 font-semibold text-bnb-white transition-colors hover:text-bnb-white"
                        : "group flex items-center gap-2 transition-colors hover:text-bnb-white"
                    }
                  >
                    <span>{link.label}</span>
                  </Link>
                )}
                <AnimatePresence>
                  {activeSoon === link.label && (
                    <motion.span
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-lg border border-bnb-gold/40 bg-black/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-bnb-gold shadow-[0_0_20px_rgba(240,185,11,0.25)]"
                    >
                      Coming soon
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <motion.a
            href="#waitlist"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.035 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F0B90B] via-[#F6C84C] to-[#F0B90B] px-5 py-2 text-sm font-semibold text-black shadow-[0_0_28px_rgba(240,185,11,0.4)] transition"
          >
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#F0B90B]/35 to-transparent blur-xl opacity-70 transition group-hover:opacity-100" />
            <span className="pointer-events-none absolute inset-0 -z-20 rounded-full bg-[radial-gradient(circle_at_30%_20%,_rgba(240,185,11,0.55),_transparent_60%)] blur-2xl opacity-70 animate-[pulse_2.6s_ease-in-out_infinite]" />
            Get Early Access
          </motion.a>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:text-white md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-white/10 bg-bnb-black/90 px-4 pb-6 pt-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 text-sm text-white/80">
              {links.map((link, index) => {
                const isSoon = comingSoonLinks.includes(link.label);
                return (
                  <motion.div
                    key={`mobile-${link.label}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.04 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={(event) => {
                        if (isSoon) {
                          event.preventDefault();
                          setActiveSoon(link.label);
                        }
                        setMobileOpen(false);
                      }}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="flex items-center justify-between text-base font-semibold text-white/90 transition hover:text-white"
                    >
                      <span>{link.label}</span>
                      {isSoon ? (
                        <span className="rounded-full border border-bnb-gold/40 bg-bnb-gold/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-bnb-gold">
                          Coming soon
                        </span>
                      ) : null}
                    </Link>
                  </motion.div>
                );
              })}
              <a
                href="#waitlist"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F0B90B] via-[#F6C84C] to-[#F0B90B] px-5 py-2 text-sm font-semibold text-black shadow-[0_0_28px_rgba(240,185,11,0.4)]"
              >
                Get Early Access
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
