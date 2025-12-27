/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purdueGold: '#CFB991',
        purdueBlack: {
          100: '#1a1a1a',
          200: '#0d0d0d',
          300: '#000000',
        },
        warmWhite: '#fafaf9',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0d0d0d 100%)',
      },
    },
  },
  plugins: [],
}

