module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        bgColor: "#F8F7FD",
        accentColor: "#7367F7",
        secondary: "#f5f5f5",
        textGrey: "#9E9E9E",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
