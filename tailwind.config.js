/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
