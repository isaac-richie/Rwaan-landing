"use client";

import Link from "next/link";
import { Github, Send, Twitter } from "lucide-react";

const socials = [
  { label: "Twitter", href: "https://x.com/RWAN_Official", icon: Twitter },
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Telegram", href: "https://t.me/RWAN_Chat", icon: Send },
  { label: "Medium", href: "https://medium.com", icon: "M" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 sm:py-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-48 w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0B90B]/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-white">Rawli Analytics</p>
          <p className="max-w-md text-sm text-white/60">
            Premium prediction market intelligence built for BNB Chain operators.
          </p>
          <div className="mt-4 flex items-center gap-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-bnb-gold/40 hover:text-bnb-gold"
              >
                {typeof social.icon === "string" ? (
                  <span className="text-sm font-semibold">{social.icon}</span>
                ) : (
                  <social.icon className="h-4 w-4" />
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm text-white/70">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Platform
          </p>
          <div className="flex items-center justify-between text-white/40">
            <span>RawliCast</span>
            <span className="rounded-full border border-bnb-gold/20 bg-bnb-gold/5 px-2 py-0.5 text-[10px] uppercase tracking-wide text-bnb-gold/60">
              Soon
            </span>
          </div>
          <div className="flex items-center justify-between text-white/40">
            <span>RawliPredict</span>
            <span className="rounded-full border border-bnb-gold/20 bg-bnb-gold/5 px-2 py-0.5 text-[10px] uppercase tracking-wide text-bnb-gold/60">
              Soon
            </span>
          </div>
          <Link
            href="https://www.stakingrawlianalytics.app"
            target="_blank"
            rel="noreferrer"
            className="block transition hover:text-white"
          >
            Staking
          </Link>
          <div className="flex items-center justify-between text-white/40">
            <span>RawliDEX</span>
            <span className="rounded-full border border-bnb-gold/20 bg-bnb-gold/5 px-2 py-0.5 text-[10px] uppercase tracking-wide text-bnb-gold/60">
              Soon
            </span>
          </div>
          <Link
            href="https://pancakeswap.finance/swap?outputCurrency=0xACB921bf2Dac2F7E8E101AAd9CA013d6Af5C648a"
            target="_blank"
            rel="noreferrer"
            className="block transition hover:text-white"
          >
            Buy RWAAN
          </Link>
          <Link
            href="https://dexscreener.com/bsc/0xa285059bbc89fe9b43414d098318675462aaa3e6"
            target="_blank"
            rel="noreferrer"
            className="block transition hover:text-white"
          >
            Dexscreener
          </Link>
        </div>

        <div className="space-y-3 text-sm text-white/70">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Support
          </p>
          <Link
            href="https://rawlianalytics.gitbook.io/rawli-analytics-docs/"
            target="_blank"
            rel="noreferrer"
            className="block transition hover:text-white"
          >
            Docs
          </Link>
          <Link href="/help" className="block transition hover:text-white">
            Help Center
          </Link>
          <Link href="/contact" className="block transition hover:text-white">
            Contact
          </Link>
        </div>

        <div className="space-y-3 text-sm text-white/70">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Legal
          </p>
          <Link href="/terms" className="block transition hover:text-white">
            Terms of Service
          </Link>
          <Link href="/privacy" className="block transition hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/risk" className="block transition hover:text-white">
            Risk Disclosure
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-2 px-4 text-xs text-white/40 sm:px-6 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Rawli Analytics. All rights reserved.</span>
        <span>BNB Chain • RawliPredict • DeFi Intelligence</span>
      </div>
    </footer>
  );
}
