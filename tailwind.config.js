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
			"move-x": "wave 15s linear infinite ",
		},
		keyframes: {
			wave: {
				"0%": { transform: "translateX(0px)" },
				"10%": { transform: "translateX(10%)" },
				"20%": { transform: "translateX(20%)" },
				"30%": { transform: "translateX(30%)" },
				"40%": { transform: " translateX(40%)" },
				"50%": { transform: "translateX(50%)" },
				"60%": { transform: "translateX(60%)" },
				"100%": { transform: "translateX(100%) ", opacity: 0 },
			},
		},
		blur: {
			xs: "0.5px",
		},
	},
	plugins: [],
};




























