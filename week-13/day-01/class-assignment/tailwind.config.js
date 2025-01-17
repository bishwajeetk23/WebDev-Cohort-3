/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          300:"#2d5077",
          800:"#002b5b"
        },
        gray:{
          300:"#416084",
          600:"#8095ac"
        },
        white:{
          500:"#eef0f4"
        },
        green:{
          700:"#3fdfcf"
        }
      }
    },
  },
  plugins: [],
}

