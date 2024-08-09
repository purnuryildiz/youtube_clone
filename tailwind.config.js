/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        customGray: "#3c3c3c",
        hoverGray: "#646464",
      },
    },
  },
  variants: {},
  plugins: [],
};
