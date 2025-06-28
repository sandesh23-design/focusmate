/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'focus-bg': '#f6f8fc',
        'focus-bg-alt': '#f0f4f8',
        'focus-primary': '#4f46e5',
        'focus-primary-light': '#3b82f6',
        'focus-accent': '#facc15',
        'focus-success': '#34d399',
        'focus-text': '#1f2937',
        'focus-text-light': '#4b5563',
        'focus-alert': '#10b981',
        'focus-gold': '#fbbf24',
      }
    },
  },
  plugins: [],
} 