/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'twilight-gold': '#D4AF37',
        'twilight-purple': '#CBA0F5',
        'twilight-wine': '#A32F52',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
      }
    },
  },
  plugins: [],
}