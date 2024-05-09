/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      poppins: ["poppins", "sans-serif"]

    },
    
    extend: {
      colors:{
      primary:"rgba(255,100,0,1)",
    },
    backgroundImage:{
      pro: "url('../images/pro.webp')"
    },
    },
  },
  plugins: [],
}

