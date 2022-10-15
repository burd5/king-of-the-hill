/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.{ejs,html,js}',
            './public/style.css'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}
