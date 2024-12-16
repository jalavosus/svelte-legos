/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				back: '#ffffff',
				'back-light': '#f6fafd',
				'back-api': '#e5eef5',
				prime: '#0E79B2',
				oldprime: '#ff3e00',
				second: '#BF1363',
				flash: '#40b3ff',
				highlight: '#F3F9D2',
				heading: '#222',
				text: '#444',
				'second-text': '#7b7766',
				'sidebar-text': 'rgba(255, 255, 255, .9)'
			},
			fontWeight: {
				300: 300,
				600: 600
			},
			fontFamily: {
				fira: 'Fira'
			}
		}
	},
	plugins: []
};
