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
          base: '#60a5fa', // สีฟ้า
          hover: '#3b82f6',
        },
        neutral: {
          lighter: '#f8fafc',
          base: '#e2e8f0',
          dark: '#64748b',
        },
        content: {
          main: '#334155',
          darker: '#1e293b',
        }
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}