/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gta-primary': '#FF4136',
        'gta-secondary': '#001f3f',
        'gta-accent': '#7FDBFF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 