/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px'
			}
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#7C3AED',
					foreground: '#ffffff'
				},
				accent: '#06B6D4',
				secondary: '#F59E0B',
				muted: '#64748B',
				background: '#F8FAFC',
				foreground: '#0F172A'
			},
			fontFamily: {
				brand: ['Manrope', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'],
			}
		}
	},
	plugins: []
};
