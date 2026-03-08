/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Noto Serif KR', 'serif'],
      },
      colors: {
        hologram: {
          pink: '#FF85A1',
          blue: '#4CC9FE',
          green: '#48E19F',
          purple: '#B377FF',
        },
        primary: {
          DEFAULT: '#7c3aed',
          light: '#bae6fd',
        }
      }
    },
  },
  plugins: [],
}
