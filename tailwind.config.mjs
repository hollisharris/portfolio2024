import defaultTheme from 'tailwindcss/defaultTheme'

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
				'sans': ['GeneralSans', ...defaultTheme.fontFamily.sans],
				'serif': ['Karma-Variable', ...defaultTheme.fontFamily.serif],
			}
		},
	},
	plugins: [],
}
