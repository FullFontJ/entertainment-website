/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cardinalRed: '#db0d15',
        codGray: '#1a1a1a',
        boulder: '#7c7c7c',
        concrete: '#f3f3f3',
        colorWhite: '#ffffff',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


