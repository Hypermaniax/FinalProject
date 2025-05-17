/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#F75A5A',
      'white': '#FFFFFF',
      'darkWhite': '#F4F4F4',
      'black': '#000000',
      'silver':'#F5F5F5',
      'redCustom' : '#FF1B1B'
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins","Oleo Script"],
        OleoScript : [ "Oleo Script","Poppins"]
      }
    },
  },
  plugins: [],
}