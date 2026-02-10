import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rawli Analytics | BNB Chain DeFi Intelligence",
  description:
    "Premium analytics suite for BNB Chain DeFi. Cross-chain ready, high-speed, and data-rich.",
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
