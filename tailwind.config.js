/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Ubuntu: ["Ubuntu", "sans-serif"],
				Poppins: ["Poppins", "sans-serif"]
			},
		},
	},
	plugins: [],
};