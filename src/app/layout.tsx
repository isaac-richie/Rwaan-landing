import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rawlianalytics",
  description: "Institutional-grade analytics for prediction markets.",
  metadataBase: new URL("https://www.rawlianalytics.io"),
  openGraph: {
    title: "Rawlianalytics",
    description: "Structured analytics for on-chain prediction markets.",
    images: ["https://www.rawlianalytics.io/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rawlianalytics",
    description: "Structured analytics for on-chain prediction markets.",
    images: ["https://www.rawlianalytics.io/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bnb-black font-sans text-bnb-white">
        {children}
      </body>
    </html>
  );
}
