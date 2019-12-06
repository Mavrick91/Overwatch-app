module.exports = {
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1600px',
		},
		maxWidth: {
			'1/4': '25%',
			'1/3': '33%',
			'1/2': '50%',
			'3/4': '75%',
			full: '100%',
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},
	},
	variants: {
		minWidth: ['responsive', 'hover', 'focus'],
	},
	plugins: [],
	important: true,
}
