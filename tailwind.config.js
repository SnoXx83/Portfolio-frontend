/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        darkBgMain: '#1a1a1a',
        darkBgSection: '#282828',
        darkTextPrimary: '#e0e0e0',
        darkTextSecondary: '#aaaaaa',
        darkBorderLight: '#444444',
        darkShadow: 'rgba(0, 0, 0, 0.4)',
        blueAccentDark: '#63b3ed',
        blueHoverDark: '#4299e1',
        indigoAccentDark: '#818cf8',
        purpleAccentDark: '#b39ddb',
        greenAccentDark: '#a7f3d0',
        redAccentDark: '#f87171',
        orangeAccentDark: '#fbd38d',
        headerBg: '#282828',
        headerShadow: 'rgba(0, 0, 0, 0.1)',
        primaryBlue: '#007bff',
        primaryBlueHover: '#0056b3',
      },
      boxShadow: {
        'custom-dark-1': '0 4px 6px -1px var(--dark-shadow), 0 2px 4px -2px var(--dark-shadow)',
        'custom-dark-2': '0 8px 16px -4px var(--dark-shadow), 0 4px 8px -2px var(--dark-shadow)',
        'custom-dark-3': '0 12px 24px -6px var(--dark-shadow), 0 6px 12px -3px var(--dark-shadow)',
      },
      backgroundImage: {
        'banner': "url('/public/banner.jfif')",
      }
    },
  },
  plugins: [],
};
