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
        // Botanical Blush (Beauty & Lifestyle + Eco)
        petal: {
          DEFAULT: "#FDF9F8", // Soft off-white blush
          dark: "#F5EFED",
          border: "rgba(102, 60, 56, 0.08)",
        },
        blush: {
          DEFAULT: "#FCEEEE", // Delicate silk blush
          silk: "#F9E4E4",
        },
        plum: {
          DEFAULT: "#2D1B36", // Deep sophisticated plum for text
          muted: "#4A3B4E",
        },
        rose: {
          gold: "#D4A373", // Warm rose gold
          soft: "rgba(212, 163, 115, 0.1)",
        },
        sage: {
          DEFAULT: "#6B705C", // Muted botanical green (Eco touch)
          light: "#A5A58D",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        canela: ["var(--font-canela)", "serif"],
        garamond: ["var(--font-garamond)", "serif"],
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "blush-spotlight": "radial-gradient(50% 50% at 50% 50%, rgba(252, 238, 238, 0.1) 0%, rgba(253, 249, 248, 0) 100%)",
      },
      maxWidth: {
        content: "1280px",
        mid: "800px",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-rose": "pulse-rose 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-rose": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.03)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
