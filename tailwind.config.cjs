const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'background-700': '#1d1e26',
				background: '#2b2b36',
				'background-300': '#353641',
				'primary-700': '#669e4b',
				primary: '#91d072',
				'primary-300': '#a9de8e',
				'secondary-700': '#2a878a',
				secondary: '#34A0A4',
				'secondary-300': '#60a4a7',
				'error-700': '#c22525',
				error: '#ce3131',
				'error-300': '#dd6f6f',
				'warning-700': '#fab800',
				warning: '#fbc500',
				'warning-300': '#fcd64d',
				'success-700': '#028df1',
				success: '#039ff4',
				'success-300': '#4fbcf7',
				overlay: '#232a3beb'
			}
		}
	},
	plugins: []
};
