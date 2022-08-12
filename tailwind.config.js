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
        brightRed:'hsl(12,88%,59%)',
        brightRedLight: 'hsl(12, 88%,69%)',
        brightRedSupLight: 'hsl(12,88%,95%)',
      }
    },
  },
  plugins: [],
}
