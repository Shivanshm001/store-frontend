/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': '"Open Sans", sans-serif',
        'poppins': '"Poppins", sans-serif'
      },
      boxShadow: {
        'full': '0 8px 35px 10px'
      }
    },
  },
  plugins: [require('daisyui')],
}
// font-family: 'Open Sans', sans-serif;
