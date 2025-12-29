/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#020617', // near-black
        accent: {
          DEFAULT: '#22d3ee',
          soft: '#818cf8',
        },
      },
    },
  },
  plugins: [],
}
