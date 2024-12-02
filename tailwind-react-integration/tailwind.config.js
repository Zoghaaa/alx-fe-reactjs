/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Older 'purge' key
  darkMode: false, // Or 'class' if you use a CSS class to toggle dark mode
  theme: {
    extend: {},
  },
  variants: {
    extend: {}, // Extend default variants if required
  },
  plugins: [],
};

