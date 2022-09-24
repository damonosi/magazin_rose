/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { fundal: "#CFD6EA", text: "#2A2D34", roz: "#FF6392" },
    },
  },
  plugins: [],
};
