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
        // Page background, used in place of white for sections.
        canvas: "#fcf6f2",
        // Background for dark cards (dark full-width sections stay `dark`).
        cocoa: "#2f1c11",
        // Links and link buttons on `cocoa` cards.
        ember: "#cc5f21",
      },
      fontFamily: {
        heading: ['"Cherry Bomb One"', "cursive"],
        body: ["Nunito", "sans-serif"],
      },
      // Heading scale, one token per level (desktop size in brackets):
      // h1 60px, h2 48px, h3 32px, h4 24px, h5 18px, h6 16px. Each step
      // scales down fluidly on smaller screens. Cherry Bomb One carries
      // h1-h3; h4-h6 are Nunito, since the display face loses legibility
      // at small sizes.
      fontSize: {
        h1: ["clamp(2.5rem, 1.75rem + 3vw, 3.75rem)", { lineHeight: "1.05" }],
        h2: ["clamp(2.125rem, 1.6rem + 2.1vw, 3rem)", { lineHeight: "1.1" }],
        h3: ["clamp(1.625rem, 1.4rem + 0.9vw, 2rem)", { lineHeight: "1.2" }],
        h4: ["clamp(1.3125rem, 1.2rem + 0.45vw, 1.5rem)", { lineHeight: "1.3" }],
        h5: ["1.125rem", { lineHeight: "1.4" }],
        h6: ["1rem", { lineHeight: "1.4" }],
        lead: [
          "clamp(1.125rem, 1.04rem + 0.35vw, 1.3125rem)",
          { lineHeight: "1.6" },
        ],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        // The "sticker" edge: a solid ink offset that buttons press into.
        press: "0 4px 0 0 #1a1a1a",
        "press-sm": "0 3px 0 0 #1a1a1a",
        "press-light": "0 4px 0 0 rgba(255,255,255,0.35)",
        lift: "0 1px 2px rgba(26,26,26,0.04), 0 12px 32px -12px rgba(26,26,26,0.18)",
      },
      maxWidth: {
        prose: "62ch",
      },
    },
  },
  plugins: [],
};
