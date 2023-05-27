/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
	theme: {
		fontFamily: {
			sans: ["Work Sans", "sans-serif"],
		},
		extend: {
			colors: {
				bs: {
					bg: "#F8F9FA",
					line: "#E4E7EB",
					white: {
						primary: "#FFFFFF",
						secondary: "#FAFAFA",
					},
					black: {
						primary: "#110F14",
						secondary: "#424C5A",
					},
					red: {
						primary: "#FE5842",
					},
					orange: {
						1: "#F15A23",
						2: "#FDE6DE",
					},
					yellow: {
						primary: "#FFEBCD",
					},
				},
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
