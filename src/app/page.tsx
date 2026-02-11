import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Roadmap from "@/components/Roadmap";
import Preview from "@/components/Preview";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden
        className="gold-bubble pointer-events-none absolute right-[-6%] top-[18%] h-64 w-64 rounded-full bg-gradient-to-br from-[#F0B90B]/28 to-transparent blur-3xl"
      />
      <Navbar />
      <Hero />
      <Metrics />
      <Features />
      <UseCases />
      <Roadmap />
      <Preview />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
