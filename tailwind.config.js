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
				fundalGri: "#B5B1B2",
				roz: "#FFE5ED",
				fromGr: "#030202",
				GrVia: "#262626",
				toGr: "#011627",
				galben: "#f9ba04",
				textTrandafiri: "#080808",
			},
		},
		animation: {
			"spin-slow": "spin 5s linear infinite",
			"bounce-slow": "ping 5s linear infinite",
			"move-x": "translate-x-1",
		},
		blur: {
			xs: "1px",
		},
	},
	plugins: [],
};




