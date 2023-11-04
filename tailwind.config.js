/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        Brown: "#ba8c48",
        brownHover: "#70542b",
        backgroundColor: "#18191b",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Cabin: ["Cabin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
