/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Space Grotesk', 'sans-serif'],
      },
      colors: {
        ink: '#05070f',
        panel: '#0f1424',
      },
      boxShadow: {
        glow: '0 20px 70px rgba(56, 189, 248, 0.18)',
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.22), transparent 40%), radial-gradient(circle at 80% 5%, rgba(167,139,250,0.2), transparent 34%), radial-gradient(circle at 70% 75%, rgba(45,212,191,0.2), transparent 40%)', 
      },
    },
  },
  plugins: [],
};