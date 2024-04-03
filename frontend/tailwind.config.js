import colorPalette from './src/utility/constants/tailwindStyle'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			colors: colorPalette,
			content: {
				middleDot: '"\\00B7"',
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		function ({ addUtilities }) {
			const newUtilities = {
				'.scrollbar-hide': {
					/* Firefox */
					'scrollbar-width': 'none',
					/* Safari and Chrome */
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				},
			}
			addUtilities(newUtilities)
		},
	],
}
