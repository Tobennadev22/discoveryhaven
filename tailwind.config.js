/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aqua: "#05c3dd",
        aquaDark: "#05c3dd",
        yellow: "#ffec00",
        dark: "#1a1a1a",
        crimson: "#de2d10",
        cream: "#f9f6f0",
      },
      fontFamily: {
        heading: ['"Cherry Bomb One"', "cursive"],
        body: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
