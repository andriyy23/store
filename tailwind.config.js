/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#72184b",
        snow: "#fffbfb",
        gray: { "100": "#fcfcfc", "200": "rgba(0, 0, 0, 0)" },
        white: "#fff",
        palevioletred: "rgba(198, 89, 143, 0.25)",
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        "josefin-sans": "'Josefin Sans'",
      },
      borderRadius: { "11xl": "30px" },
    },
    fontSize: { "76xl": "95px", "6xl": "25px", "81xl": "100px" },
  },
  corePlugins: { preflight: false },
};