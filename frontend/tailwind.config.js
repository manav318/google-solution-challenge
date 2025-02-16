/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
          fontFamily: {
            playfair: ["Playfair Display", "serif"],
            titan: ["Titan One", "sans-serif"],
            water: ["Water Special", "cursive"], 
          },
          backgroundImage: {
            'gradient-custom': "linear-gradient(to bottom, #0c1e4a, #3264a8)", 
          },
        },
      },
  plugins: [],
};
