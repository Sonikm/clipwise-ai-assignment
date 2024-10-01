/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        googleSans: ['Product Sans Regular', 'sans-serif'],
      }
      ,
      colors: {
        green: "#317189",
        'green-bold': "#31546D",
      }
    },
  },
  plugins: [],
}