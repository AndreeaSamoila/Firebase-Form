/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      fontSize: {
        sm: ['14.5px', '20px'],
        base: ['15.5px', '21px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    },
  },
  plugins: [],
}
