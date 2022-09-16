/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        mineShaft: '#333333',
        sunglow: '#ffce35',
        persimmon: '#ff684a',
        alabaster: '#f9f9f9',
        scorpi: '#575757',
        alto: '#d6d6d6',
        silverChalice: '#a0a0a0',
        christi: '#48b80f',
        selectiveYellow: '#ffb300',
        redOrange: '#ff2929',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


