/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: ["hover:rotate-3", "hover:-rotate-3", "hover:rotate-6", "hover:-rotate-6", "hover:rotate-12", "hover:-rotate-12"]
}
