/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'ciencia-bg': "url('../src/Ciencia-section1/assets/Ciencia_image_01.png')",
      }
    },
  },
  plugins: [],
}