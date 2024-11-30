/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: ['Neue_Montreal', 'sans-serif'], 
        grotesk: ['Founders_Grotesk', 'sans-serif'], 
        groteskCond: ['Founders_Grotesk_Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

