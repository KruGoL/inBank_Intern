/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'logo': "url('@/assets/img/YIN4xUBaqnk_sm.svg')"
      },
      colors: {
        'grey-dark': '#413C3C',
        'grey-light': '#9C9C9C',
        'grey-line': '#E9E9E9',
        'violet-dark': '#2B0A57',
      },
    },
  },
  plugins: [],
}
