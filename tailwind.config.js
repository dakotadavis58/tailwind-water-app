/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        30: "7.5rem",
        x: "22.5%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
