/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
        },
        hologram: {
          pink: 'var(--color-hologram-pink)',
          blue: 'var(--color-hologram-blue)',
          green: 'var(--color-hologram-green)',
          purple: 'var(--color-hologram-purple)',
        }
      },
      fontFamily: {
        serif: ['Lora', '"Noto Serif KR"', 'serif'],
      }
    },
  },
  plugins: [],
}
