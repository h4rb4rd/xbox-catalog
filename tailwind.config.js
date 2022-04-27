const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: 'Segoe UI,SegoeUI,"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;',
		},
		extend: {
			colors: {
				green: colors.green,
			},
		},
	},
	plugins: [],
}
