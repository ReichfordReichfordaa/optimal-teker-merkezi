import type { Config } from "tailwindcss";

/**
 * OPTIMAL TƏKƏR MƏRKƏZİ — design token system
 * -------------------------------------------------
 * Obsidian black / off-white / graphite grays as the structural palette.
 * A single warm "Optimal Orange" accent — the color of a torque wrench
 * mark and a hazard tread — used sparingly as a signal, never a wash.
 * A hairline of "Diagnostic Blue" reserved for focus states and the
 * Hunter Road Force alignment-reticle motif only.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0A0A0B",
          50: "#F5F5F6",
          100: "#E8E8EA",
          200: "#C6C6CA",
          300: "#9C9CA3",
          400: "#6B6B72",
          500: "#4A4A50",
          600: "#333338",
          700: "#232326",
          800: "#18181A",
          900: "#121213",
          950: "#0A0A0B",
        },
        canvas: {
          DEFAULT: "#FAFAF8",
          dim: "#F2F1EE",
        },
        accent: {
          DEFAULT: "#FF5A1F",
          dim: "#FF7A45",
          muted: "#FFE4D6",
        },
        diagnostic: {
          DEFAULT: "#2F6FED",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-1": ["clamp(2.75rem, 6vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2.25rem, 4.2vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-3": ["clamp(1.75rem, 2.8vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        premium: "0 1px 2px rgba(10,10,11,0.04), 0 24px 48px -12px rgba(10,10,11,0.18)",
        "premium-lg": "0 2px 4px rgba(10,10,11,0.05), 0 40px 80px -20px rgba(10,10,11,0.28)",
        glow: "0 0 0 1px rgba(255,90,31,0.15), 0 8px 24px -4px rgba(255,90,31,0.25)",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 40s linear infinite",
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
