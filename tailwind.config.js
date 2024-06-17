/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'mainBlue' : '#0D1337',
        'mainOrange' : '#FF6F29',
        'orangeWhite' : '#FF8626'
      }
    },
  },
  plugins: [],
}

