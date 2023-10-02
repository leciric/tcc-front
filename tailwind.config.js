/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans serif'],
        display: ['Inter', 'sans serif'],
        body: ['Inter', 'sans serif'],
      },
      colors: {
        primary: '#15C5CE',
        secondary: '#5E6366',
        link: '#4285F4',
        'sub-text': '#2A2A2E',
        warning: '#cc3300',
        success: '#47B881',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        sideMenuShow: {
          from: { opacity: 0, transform: 'translate(-50%, 0%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(0%, 0%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
