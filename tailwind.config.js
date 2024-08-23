/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}"

  ],

  theme: {
    extend: {
      backgroundImage:{
        'login' : "url('../src/img/login-new.jpeg')",
        'art' :  "url('../src/img/bg_atritce1.jpg')"
      }
    },
  },
  plugins: [],
}

