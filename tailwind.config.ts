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
        // Soft Feminine yet Powerful Palette
        primary: {
          DEFAULT: "#7B5CFF", // Soft Empowerment Purple
          light: "#E9D5FF",    // Lavender Mist
          dark: "#5B21B6",     // Deep Confidence Purple
        },
        secondary: {
          DEFAULT: "#F472B6", // Feminine Leadership Pink
          light: "#FBCFE8",    // Soft Rose
          dark: "#EC4899",     // Warm Highlight Pink
        },
        neutral: {
          offwhite: "#FAFAFF",
          background2: "#F5F3FF",
          background3: "#FDF4FF",
          heading: "#2D2D2D",
          subheading: "#5B5B6E",
        },
        accent: {
          purple: "#7B5CFF",
          pink: "#EC4899",
          lavender: "#E9D5FF",
        }
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        canela: ["var(--font-canela)", "serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #7B5CFF 0%, #F472B6 100%)",
        "btn-gradient": "linear-gradient(135deg, #7B5CFF, #F472B6)",
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      maxWidth: {
        content: "1280px",
        mid: "800px",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
