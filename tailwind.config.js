/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A", // Dark charcoal/black for text
        secondary: "#F5F5F5", // Light gray/off-white background
        accent: "#D4AF37", // Gold/metallic accent
        "surface": "#FFFFFF",
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'], // Elegant serif for headings
      }
    },
  },
  plugins: [],
}
