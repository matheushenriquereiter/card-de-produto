/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pink: "#D9CDF7",
      blue: "#271A45",
      purple: "#625580",
    },
    fontFamily: {
      crimsonPro: "Crimson Pro",
      lato: "Lato",
    },
    extend: {},
  },
  plugins: [],
};
