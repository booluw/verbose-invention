/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ddf2e6",
          100: "#bae5cd",
          200: "#98d8b4",
          300: "#75cb9b",
          400: "#64c58f",
          500: "#53be82",
          600: "#429868",
          700: "#32724e",
          800: "#214c34",
          900: "#11261a",
          950: "#08130d",
          DEFAULT: "#53be82",
        },
        secondary: {
          50: "#fff2b3",
          300: "#ffe04d",
          650: "#cca800",
          DEFAULT: "#ffd200",
        },
      },
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
      },
      width: {
        page: "1200px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-30%)" },
        },
        marqueen: {
          "0%": { transform: "translateX(-30%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-infinite": "marquee 20s linear infinite",
        "marqueen-infinite": "marqueen 20s linear infinite",
      },
    },
  },
  plugins: [],
};