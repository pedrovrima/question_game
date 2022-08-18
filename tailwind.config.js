/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

      minHeight: {
        'screen':'100vh',
        '96': '24rem',
        '24': '96px',
      }
  },
  plugins: [],
}
