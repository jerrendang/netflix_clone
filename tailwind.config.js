/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    colors: {
      grey: '#141414',
      red: 'rgb(229, 9, 20)',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: '#e5e5e5',
      indigo: colors.indigo,
      yellow: colors.amber,
      blue: colors.indigo,
    },
    extend: {},
  },
  plugins: [],
}

