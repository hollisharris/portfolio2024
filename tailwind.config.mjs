/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				'screen80': '80vh',
				'screen90': '90vh'
			},	
			fontFamily: {
				'sans': ['GeneralSans', 'ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
				'serif': ['Gambetta', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
			}
		},
	},
	plugins: [],
}
