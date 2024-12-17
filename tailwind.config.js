/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#F4D04E",
        darkGrey: "#111111",
        lightGrey: "#6B6B6B",
      },
      fontFamily: {
        sans: ["FigtreeMedium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
