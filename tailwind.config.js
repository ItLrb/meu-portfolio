/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '16': 'grid-template-rows: repeat(3, 60px)',
        '50': 'grid-template-rows: repeat(2, 1fr)',
        '21': 'grip-template-rows: 1f'
      },
      gridTemplateColumns: {
        '16': 'grid-template-columns: repeat(2, 51px)',
        '50': 'grid-template-columns: 50%'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

