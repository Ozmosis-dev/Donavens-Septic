/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        'primary-dark': '#000000',
        'primary-light': '#333333',
        accent: '#76BC21',
        'accent-hover': '#5DA010',
        'accent-light': '#95D645',
        blue: '#0072BC',
        'off-white': '#F7F8FA',
        'gray-light': '#EEEFF1',
        'gray-mid': '#888F9A',
        'text-dark': '#1A1A2E',
        'text-heading': '#111111',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        btn: '6px',
        card: '8px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.08)',
        'btn-hover': '0 4px 16px rgba(118,188,33,0.35)',
        header: '0 2px 8px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
