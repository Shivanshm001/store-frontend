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
      }
    },
  },
  plugins: [],
}
// font-family: 'Open Sans', sans-serif;
