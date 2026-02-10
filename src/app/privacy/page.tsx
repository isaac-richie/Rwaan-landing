export const metadata = {
  title: "Privacy Policy | Rawli Analytics",
  description: "Rawli Analytics Privacy Policy",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/60">
            Last updated: February 10, 2026
          </p>
        </div>

        <div className="space-y-6 text-sm text-white/70">
          <p>
            This Privacy Policy explains how Rawli Analytics ("Rawli," "we," "our," or
            "us") collects, uses, and protects your information when you use our
            services.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-white">1. Information We Collect</h2>
            <p className="mt-2">
              We may collect basic account details (such as email address for waitlist
              access), usage data, and device information. Wallet connections remain
              non-custodial and we do not store private keys.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">2. How We Use Information</h2>
            <p className="mt-2">
              We use your information to provide access, send platform updates,
              improve product performance, and maintain security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">3. Data Sources & Analytics</h2>
            <p className="mt-2">
              We analyze aggregated on-chain and market data to generate insights.
              This analysis does not include private wallet keys or sensitive
              authentication data.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">4. Sharing & Disclosure</h2>
            <p className="mt-2">
              We do not sell your personal data. We may share data with service
              providers strictly for operational purposes, or if required by law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">5. Data Security</h2>
            <p className="mt-2">
              We use reasonable technical and organizational measures to protect
              data. No system is perfectly secure, and you use the service at your
              own risk.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">6. Data Retention</h2>
            <p className="mt-2">
              We retain data only as long as needed to provide the service, comply
              with legal obligations, or enforce our terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">7. Your Choices</h2>
            <p className="mt-2">
              You may request removal of your email from the waitlist or opt out
              of communications at any time.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">8. Changes to Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy. Continued use constitutes
              acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">9. Contact</h2>
            <p className="mt-2">For questions, contact: marketingrawlianalytics@proton.me</p>
          </div>
        </div>
      </section>
    </main>
  );
}
