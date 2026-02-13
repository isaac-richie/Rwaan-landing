import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bnb: {
          black: "#0B0E11",
          gold: "#F0B90B",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter-tight)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Consolas", "monospace"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.01em",
        normal: "-0.005em",
        wide: "0.02em",
        wider: "0.05em",
      },
      boxShadow: {
        glow: "0 0 40px rgba(240, 185, 11, 0.25)",
      },
      backgroundImage: {
        "gold-glow":
          "radial-gradient(400px 200px at 50% 50%, rgba(240, 185, 11, 0.2), transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
