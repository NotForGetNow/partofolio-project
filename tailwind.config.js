/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#A5D364',
        customBiege: '#F4EFE9',
        customGray: '#EAEAEA'
      },
    },
  },
  plugins: [],
}

