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
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-100%)' },
					'20%': { opacity: '1' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-out-left': {
					'0%': { opacity: '1', transform: 'translateX(0)' },
					'80%': { opacity: '1' },
					'100%': { opacity: '0', transform: 'translateX(-100%)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(125%)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { opacity: '1', transform: 'translateX(0)' },
					'100%': { opacity: '0', transform: 'translateX(125%)' }
				},
				'rotate-center': {
					'0%': { transform: 'rotate(0)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'fade-in': 'fade-in .4s ease-in both',
				'fade-out': 'fade-out .4s ease-out both',
				'slide-in-left': 'slide-in-left .75s ease-in both',
				'slide-out-left': 'slide-out-left .75s ease-out both',
				'slide-in-right': 'slide-in-right .85s ease-in both',
				'slide-out-right': 'slide-out-right .85s ease-out both',
				'rotate-center': 'rotate-center 1s ease-in-out infinite both'
			}
		}
	},
	plugins: []
};
