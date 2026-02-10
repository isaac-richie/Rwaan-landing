"use client";

export default function VisionSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F0B90B]/10 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="border-l-2 border-[#F0B90B]/30 pl-6 sm:pl-10">
          <p className="text-2xl font-light italic leading-relaxed tracking-tight text-white/90 sm:text-3xl md:text-4xl">
            The hardest part of any market is not the trade; it is the{" "}
            <span className="text-[#F0B90B] font-medium not-italic">noise</span>. Prediction is
            the ultimate utility. In a world of infinite data, Rawli Analytics is the
            filter. We replaced intuition with inference and doubt with data. Welcome
            to the era of informed conviction.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-[#F0B90B]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#F0B90B]">
              Polymarket builder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
