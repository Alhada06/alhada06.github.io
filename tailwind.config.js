/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        bgblue: "#041731",
        bgbluelighter: "#042552",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        rotate: {
          "50%": { transform: "translateY(-50%) rotate(180deg)" },
          "100%": { transform: "translateY(-50%) rotate(360deg)" },
        },

        jello: {
          "from, 11.1%,to": {
            transform: "translate3d(0, 0, 0)",
          },

          "22.2%": {
            transform: "skewX(-12.5deg) skewY(-12.5deg)",
          },

          "33.3%": {
            transform: "skewX(6.25deg) skewY(6.25deg)",
          },

          "44.4%": {
            transform: "skewX(-3.125deg) skewY(-3.125deg)",
          },

          "55.5%": {
            transform: "skewX(1.5625deg) skewY(1.5625deg)",
          },

          "66.6%": {
            transform: "skewX(-0.78125deg) skewY(-0.78125deg)",
          },

          "77.7%": {
            transform: "skewX(0.390625deg) skewY(0.390625deg)",
          },

          "88.8%": {
            transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)",
          },
        },
        ripple: {
          "0%": { width: "0%", height: "100%", opacity: 0.8 },
          "50%": { width: "50%", height: "100%", opacity: 0.5 },

          "100%": { width: "100%", height: "100%", opacity: 0 },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        wave1: "rotate 6s linear infinite",
        wave2: "rotate 10s linear -5s infinite",
        jello: "jello 2s infinite",
        ripple: "ripple 3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
