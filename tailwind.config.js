// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': {
          DEFAULT: '#26a69a',
          'lighten-1': '#4db6ac',
          'lighten-2': '#80cbc4',
        },
        'brown': {
          'text': '#795548',
          'lighten-3': '#a1887f',
        }
      },
    },
  },
  plugins: [],
}