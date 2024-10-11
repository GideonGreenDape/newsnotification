/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif'],
        SixtyfourConvergence: ['Sixtyfour Convergence'],
        Updock: ['Updock'],
        Pacifico:['Pacifico'],
        roboto:['Roboto']
      },
      colors:{
        darkgreen: "#186E64",
        linkblue: "#4337D4",
        gray: "#D9D9D9",
        darkgray:"#847F7F",
        offwhite: "#FAFAFA",
        darkergray:"#E9E8E8"
      }
    },
  },
  plugins: [
  ],
}

