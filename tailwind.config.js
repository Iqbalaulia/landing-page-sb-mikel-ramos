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
						1: "#FFFFFF",
						2: "#FAFAFA",
					},
					black: {
						1: "#1F2933",
						2: "#282D3B",
						3: "#475A6B",
						4: "#9AA5B1",
						5: "#7B8794",
						6: "#E4E7EB",
					},
					red: {
						1: "#FF4B4B",
						2: "#FFE8E8",
						primary: {
							1: "#D50422",
						},
					},
					orange: {
						1: "#F15A23",
						2: "#FDE6DE",
					},
					yellow: {
						1: "#FFCE22",
						2: "#FFB000",
						3: "#FFEEC7",
					},
					green: {
						1: "#6EBF46",
						2: "#EAFEFF",
						3: "#08A78B",
						primary: {
							1: "#6EBF46",
							2: "#EAFEFF",
						},
					},
					blue: {
						1: "#125BC9",
						2: "#E8EFFA",
						primary: {
							1: "#1B5199",
						},
					},
					purple: {
						1: "#BE50AF",
						2: "#F4E1F1",
						disabled: "#D388C9",
					},
				},
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
