/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      dotColor: 'rgba(254, 215, 170, 1)', // Adjust the color as needed
    },
   },
  },
  plugins: [],
}

