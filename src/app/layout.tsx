import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="min-h-screen bg-bnb-black font-sans text-bnb-white">
        {children}
      </body>
    </html>
  );
}
