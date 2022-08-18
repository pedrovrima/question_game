/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

      minHeight: {
        '96': '24rem',
        '24': '96px',
      }
  },
  plugins: [],
}
