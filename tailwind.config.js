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
			invarte: "spin 1s infinite",
			"ping-slow": "ping  5s  infinite",
			wiggle: "wiggle 1s ease-in-out infinite",
			"wiggle-ping": "wiggle 1s ease-in-out infinite,ping  4s  infinite",
		},
		keyframes: {
			spin: {
				"0%": { transform: "rotate(0deg)" },
				"10%": { transform: "rotate(36deg)" },
				"20%": { transform: "rotate(72deg)" },
				"30%": { transform: "rotate(108deg)" },
				"40%": { transform: "rotate(144deg)" },
				"50%": { transform: "rotate(180deg)" },
				"60%": { transform: "rotate(216deg)" },
				"70%": { transform: "rotate(252deg)" },
				"80%": { transform: "rotate(288deg)" },
				"90%": { transform: "rotate(324deg)" },
				"100%": { transform: "rotate(360deg)" },
			},
			wiggle: {
				"0%, 100%": { transform: "rotate(-3deg)" },
				"50%": { transform: "rotate(3deg)" },
			},
			ping: {
				"75%, 100%": {
					transform: "scale(2)",
					opacity: 0,
				},
			},
		},
		blur: {
			xs: "0.5px",
		},
	},
	plugins: [],
};









































































