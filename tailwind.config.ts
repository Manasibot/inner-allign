import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Contemporary Light Elegance Tokens
        stone: {
          DEFAULT: "#F7F4F0", // Warm architectural stone
          dark: "#EBE3D5",
          border: "rgba(26, 18, 11, 0.08)",
        },
        alabaster: {
          DEFAULT: "#FCFAF9", // High-end white
        },
        espresso: {
          DEFAULT: "#1A120B", // Sophisticated dark text
          muted: "#3D342D",
        },
        gold: {
          DEFAULT: "#C5A059", // Antique gold
          muted: "#A68A4A",
          soft: "rgba(197, 160, 89, 0.1)",
        },
        eucalyptus: {
          DEFAULT: "#4A5D4E", // Botanical secondary accent
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        canela: ["var(--font-canela)", "serif"],
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
        "gold-spotlight": "radial-gradient(50% 50% at 50% 50%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 17, 40, 0) 100%)",
      },
      maxWidth: {
        content: "1280px",
        mid: "800px",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-gold": "pulse-gold 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
