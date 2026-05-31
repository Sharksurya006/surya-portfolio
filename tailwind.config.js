/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#0d1117",
          secondary: "#080b10",
          card: "#161b27",
          input: "#1a1f2e",
        },
        border: {
          DEFAULT: "#2d333b",
          muted: "#484f58",
        },
        text: {
          primary: "#e6edf3",
          secondary: "#c9d1d9",
          muted: "#8b949e",
          faint: "#768390",
          ghost: "#484f58",
        },
        accent: {
          cyan: "#00ffc8",
          purple: "#7c6ffa",
          orange: "#fa8231",
          pink: "#ff6b9d",
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 5s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
        "glow-reverse": "glow 5.5s ease-in-out infinite reverse",
        pulse2: "pulse2 2s infinite",
        fadeUp: "fadeUp 0.9s ease forwards",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" },
        },
        pulse2: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0,255,200,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(0,255,200,0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
