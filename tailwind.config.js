/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',    // Add your index.html file
    './**/*.js',       // Include all JavaScript files in your project
    './**/*.css',      // Include all CSS files if needed
  ],
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