/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'yellow-primary': '#D4AF37',
        'light-gray': 'rgba(240, 240, 240, 1)',
      }
    }
  },
  plugins: [],
}
