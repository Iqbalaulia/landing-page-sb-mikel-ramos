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
					line: "#E2E9F3",
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
						primary: "#F15A23",
						secondary: "#FDE6DE",
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
