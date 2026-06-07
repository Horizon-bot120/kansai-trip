/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ink: {
          900: "#0e1822",
          800: "#16242f",
          700: "#1a2b3c",
          600: "#26404f",
        },
        mist: "#4a6b7c",
        matcha: "#7a8c5a",
        ajisai: "#6c7bb5",
        lamp: "#e0a060",
        paper: "#eef2f0",
      },
      fontFamily: {
        mincho: ['"Shippori Mincho"', "serif"],
        zen: ['"Zen Kaku Gothic New"', "sans-serif"],
        maru: ['"Zen Maru Gothic"', "sans-serif"],
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        bobArrow: {
          "0%,100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        drawLine: {
          to: { strokeDashoffset: "0" },
        },
        sheen: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        bobArrow: "bobArrow 2s ease-in-out infinite",
        sheen: "sheen 8s linear infinite",
      },
    },
  },
  plugins: [],
};
