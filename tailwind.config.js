/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redd: "#AE3034",
        lred: "#FFD8DC",
      },
      screens: {
        rl: ""
      }
    },
  },
  plugins: [],
}
