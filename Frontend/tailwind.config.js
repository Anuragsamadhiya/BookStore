/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  placeholderColor: {
    'light': '#A0AEC0', // light mode placeholder color
    'dark': '#718096',  // dark mode placeholder color
  },
  plugins: [
    require('daisyui'),
  ],
}