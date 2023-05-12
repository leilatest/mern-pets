/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Glegoo: ["'Glegoo'", "serif", "sans-serif"],
        Montserrat: ["'Montserrat Alternates'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
