/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",

    },
    extend: {
      colors:{
        purple: '#AB67B1',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

