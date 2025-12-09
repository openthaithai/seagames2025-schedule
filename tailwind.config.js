/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', 'sans-serif'], // เพิ่ม Font Prompt เป็นค่าเริ่มต้น
      },
    },
  },
  plugins: [],
}