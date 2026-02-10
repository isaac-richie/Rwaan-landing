export const metadata = {
  title: "Risk Disclosure | Rawli Analytics",
  description: "Rawli Analytics Risk Disclosure",
};

export default function RiskDisclosurePage() {
  return (
    <main className="min-h-screen bg-bnb-black text-bnb-white">
      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10">
          <a
            href="/"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:border-bnb-gold/50 hover:text-white"
          >
            ← Back to Home
          </a>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Risk Disclosure
          </h1>
          <p className="mt-3 text-sm text-white/60">
            Last updated: February 10, 2026
          </p>
        </div>

        <div className="space-y-6 text-sm text-white/70">
          <p>
            Rawli Analytics provides informational tools for prediction markets.
            Use of the platform involves risk. By using Rawli, you acknowledge and
            accept the risks described below.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-white">1. Market Risk</h2>
            <p className="mt-2">
              Prediction markets and digital assets are volatile. Prices and
              probabilities can change rapidly, and you may lose part or all of
              your capital.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">2. No Advice</h2>
            <p className="mt-2">
              Rawli does not provide financial, legal, or investment advice. All
              decisions are yours alone.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">3. Data & Model Risk</h2>
            <p className="mt-2">
              Analytics and signals are generated from available data sources and
              models. They may be incomplete, delayed, or inaccurate.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">4. Execution Risk</h2>
            <p className="mt-2">
              Trades may be subject to slippage, liquidity constraints, or
              execution delays. You are responsible for assessing execution
              conditions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">5. Regulatory Risk</h2>
            <p className="mt-2">
              Legal and regulatory treatment of prediction markets varies by
              jurisdiction and may change. You are responsible for compliance
              with local laws.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">6. Technology Risk</h2>
            <p className="mt-2">
              The platform may experience outages, bugs, or other failures. You
              assume all risks associated with using software systems.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">7. Limitation of Liability</h2>
            <p className="mt-2">
              To the fullest extent permitted by law, Rawli Analytics is not
              liable for any losses or damages arising from use of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">8. Contact</h2>
            <p className="mt-2">For questions, contact: marketingrawlianalytics@proton.me</p>
          </div>
        </div>
      </section>
    </main>
  );
}
