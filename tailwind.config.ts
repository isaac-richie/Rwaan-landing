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
        sans: ["\"Plus Jakarta Sans\"", "Inter", "system-ui", "sans-serif"],
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
