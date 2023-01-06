/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        huninn: ['HunInn', 'sans-serif'],
        genjyuugothic: ['GenJyuuGothicP', 'sans-serif'],
      },
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
      },
      backgroundImage: {
        'open-menu': "url('@/assets/images/btn_burger_open.png')",
        'close-menu': "url('@/assets/images/btn_burger_close.png')",
        'btn-sponsor': "url('@/assets/images/btn_sponsor.png')"
      }
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'h2': {
          fontWeight: '700',
          fontSize: '28px',
          letterSpacing:'0.05em',
          '@media (min-width: 768px)': {
            fontSize: '60px',
            letterSpacing:'0.02em',
          },
        },
        'h3': {
          fontWeight: '700',
          fontSize: '24px',
          '@media (min-width: 768px)': {
            fontSize: '44px',
            letterSpacing:'0.02em',
          }
        },
        'h4': {
          fontWeight: '700',
          fontSize: '20px',
          letterSpacing:'0.05em',
          '@media (min-width: 768px)': {
            fontSize: '32px',
            letterSpacing:'0.02em',
          }
        },
        'h5': {
          fontWeight: '700',
          fontSize: '18px',
          letterSpacing:'0.05em',
          '@media (min-width: 768px)': {
            fontSize: '24px',
            letterSpacing:'0.02em',
          }
        },
      })
    })
  ],
}
