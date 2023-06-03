/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // color primary
        "primary-blue-200":"#5457b6",
        "primary-blue-100":"#c3c4ef",
        "primary-red-200":"#ed6468",
        "primary-red-100":"#ffb8bb",

        // color neutral
        "neutral-500":"#324152",
        "neutral-400":"#67727e",
        "neutral-300":"#eaecf1",
        "neutral-200":"#f5f6fa",
        "neutral-100":"#FFFFFF",
      },
      fontFamily:{
        "Rubik": "'Rubik', sans-serif"
      },
      fontWeight:{
        "400": 400,
        "500": 500,
        "700": 700,
      }
    },
  },
  plugins: [],
}

