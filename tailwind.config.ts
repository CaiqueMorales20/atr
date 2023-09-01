/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
      },
      colors: {
        secondary: '#f5fbff',
      },
      fontSize: {
        sm: 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);',
        base: 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        medium: 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
        lg: 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
        xl: ['clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)', '1.3'],
        '2xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
      },
    },
  },
  plugins: [],
}
