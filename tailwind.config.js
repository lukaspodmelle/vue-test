/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Inter, sans-serif',
			},
			colors: {
				blue: '#1179D2',
				black: '#222222',
			},
		},
	},
	plugins: [],
};
