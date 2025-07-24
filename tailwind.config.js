/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ corrected glob pattern
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], 
        nunito: ['"Nunito"', 'sans-serif'],
        Intter: ['Inter', 'sans-serif'],
        Plus: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
