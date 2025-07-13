/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this includes .tsx
  ],
  theme: {
    extend: {
      colors: {
        // Defined Palette
        'primary-dark': '#0A1128', // Very dark, almost black blue – for backgrounds, deep sections, footer
        'secondary-action': '#FF7F11', // Vibrant, energetic orange – for CTAs, highlights, icons
        'accent-teal': '#00BFBF', // Clean, contemporary teal – for progress bars, secondary highlights, subtle gradients
        'neutral-dark': '#333333', // Rich, dark gray – for primary text on light backgrounds
        'neutral-light': '#F0F4F8', // Soft, subtle light gray – for section backgrounds, alternate rows
        'text-on-dark': '#E0E0E0', // Soft white – for text on dark primary/dark backgrounds
        'border-light': '#CDD1D3', // Light gray for borders, dividers, subtle details

        // Semantic Usage
        'background-page': '#F8FAFC', // Slightly lighter than neutral-light for main body
        'background-section': '#FFFFFF', // For distinct sections
        'text-heading': '#0A1128',
        'text-body': '#333333',
        'text-secondary': '#6B7280', // For smaller helper texts
      },
      fontFamily: {
        // Modern sans-serif fonts
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'], // For headings and impactful text
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-down': 'slideInDown 0.7s ease-out forwards',
        'slide-in-up': 'slideInUp 0.7s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}