/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
