/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'emerald': colors.emerald,
        'amber': colors.amber,
        'violet': colors.violet,
        'teal': colors.teal,
        'lime': colors.lime,
        'sky': colors.sky,
      },
    }
  },
  plugins: [],

}
