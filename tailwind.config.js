/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1a365d', // Darker shade for light mode
          DEFAULT: '#0A192F', // Original dark mode color
        },
        secondary: {
          light: '#38b2ac', // Darker teal for light mode
          DEFAULT: '#64FFDA', // Original color
        },
        accent: '#FFD700',
        background: {
          light: '#f7fafc', // Slightly darker background for light mode
          DEFAULT: '#121212',
        },
        text: {
          light: '#2d3748', // Darker text for light mode
          DEFAULT: '#EAEAEA',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
};