/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			width: {
				layout: '90%',
				card: '600px',
				carousel: '200px',
			},
			maxWidth: {
				layout: '1800px',
			},
			height: {
				card: '500px',
				carousel: '230px',
			},
			boxShadow: {
				cardPreview: '0px -0px 10px -4px rgba(52,152,219,0.61)',
			},
		},
		colors: {
			transparent: 'transparent',
			primary: '#1E293B',
			secondary: '#3498DB',
			white: '#FFFFFF',
			gray: '#6c757d',
			gradient: 'linear-gradient(75.22deg, #00112E 41.43%, #607D8B 89.56%)',
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: {
				raw: '(max-width: 768px)',
			},
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
