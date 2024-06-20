/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'mainBlue': '#0D1337',
        'mainOrange': '#FF6F29',
        'orangeWhite': '#FF8626',
        'lightGray': '#8E919A',
      }
    },
  },
  plugins: [],
}

