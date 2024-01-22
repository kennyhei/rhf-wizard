/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./demo/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        success: 'rgb(var(--color-success) / <alpha-value>)',
      },
      screens: {
        'xs': '512px'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["dark"]
  }
}