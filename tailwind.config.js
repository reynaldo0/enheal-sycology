/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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

