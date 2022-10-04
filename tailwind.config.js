/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fundal: "#080808",
        text: "#FFFF80",
        roz: "#FF6392",
        galben: "#f9ba04",
        textTrandafiri: "#080808",
      },
    },
  },
  plugins: [],
};
