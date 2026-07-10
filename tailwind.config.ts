import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#a78bfa",
          cyan: "#67e8f9",
          violet: "#7c3aed",
          dark: "#0b0813",
          deeper: "#080610",
          deepest: "#06040f",
        },
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6), #0b0813)",
        "neon-gradient": "linear-gradient(135deg, #a78bfa 0%, #67e8f9 100%)",
        "card-hover-purple": "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(103,232,249,0.1))",
      },
      boxShadow: {
        "neon-purple": "0 0 30px rgba(167, 139, 250, 0.3), 0 0 60px rgba(167, 139, 250, 0.1)",
        "neon-cyan": "0 0 30px rgba(103, 232, 249, 0.3), 0 0 60px rgba(103, 232, 249, 0.1)",
        "card-hover": "0 25px 50px -12px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 8px rgba(167, 139, 250, 0.4)" },
          "50%": { boxShadow: "0 0 20px rgba(167, 139, 250, 0.8)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      transitionDuration: {
        "400": "400ms",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
