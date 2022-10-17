/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				fundal: "#311847",
				fundalTrandafiri: "#ff7f87",
				text: "#FFFF80",
				fundalTextTrandafiri: "",
				roz: "#FFE5ED",
				galben: "#f9ba04",
				textTrandafiri: "#080808",
			},
		},
	},
	plugins: [],
};

