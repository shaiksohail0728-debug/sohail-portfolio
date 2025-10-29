/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#64FFDA",
      },
    },
  },
  plugins: [],
};
