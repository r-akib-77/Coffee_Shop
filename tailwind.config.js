/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      colors:{
        lower:'#FED8B1',
        low:'#ECB176',
        medium:"#A67B5B",
        dark:'#6F4E37',
        font:'#bc8f6d',
        font2:'#543310'
      
  
      },
      fontFamily:{
        hero:"Poetsen One"
      }
    },
  },
  plugins: [],
}