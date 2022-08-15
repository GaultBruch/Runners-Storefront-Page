/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        mainRed:'#E22C2C',
        highRed: '#FF5045',
        mainGold: '#EFBA00',
        highGold: '#FFC700',
        mainGrey: '#F3F3F3',

      }
    },
  },
  plugins: [],
}
