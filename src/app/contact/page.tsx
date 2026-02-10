export const metadata = {
  title: "Contact | Rawli Analytics",
  description: "Contact Rawli Analytics",
};

export default function ContactPage() {
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
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Get in touch
          </h1>
          <p className="mt-3 text-sm text-white/60">
            For partnerships, press, or product access, reach us below.
          </p>
        </div>

        <div className="space-y-6 text-sm text-white/70">
          <div>
            <h2 className="text-lg font-semibold text-white">Email</h2>
            <p className="mt-2">marketingrawlianalytics@proton.me</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Telegram</h2>
            <p className="mt-2">https://t.me/RWAN_Chat</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">X (Twitter)</h2>
            <p className="mt-2">https://x.com/RWAN_Official</p>
          </div>
        </div>
      </section>
    </main>
  );
}
