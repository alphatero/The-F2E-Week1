/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007FAB',
          dark: '#003A4F',
          tint: '#B0D2DE'
        },
        secondary: {
          DEFAULT: '#FFC37D',
          dark: '#A46039',
          tint: '#FFE2A9'
        },
        highlight: {
          DEFAULT: '#FF5136',
          dark: '#CD331A',
          tint: '#FFB5A4'
        },
        gray: {
          800: '#333333',
          600: '#666666',
          400: '#999999',
          200: '#CCCCCC',
        }
      }
    },
  },
  plugins: [],
}
