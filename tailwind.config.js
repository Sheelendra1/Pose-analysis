/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#5EEAD4',
          DEFAULT: '#2DD4BF',
          dark: '#0F766E',
        },
        secondary: {
          light: '#C4B5FD',
          DEFAULT: '#A78BFA',
          dark: '#7C3AED',
        },
        accent: {
          light: '#FDBA74',
          DEFAULT: '#FB923C',
          dark: '#C2410C',
        }
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 6s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};