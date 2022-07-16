/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        default : '#22C55E',
        blacktext : '#121212',
        regulartext : '#757575',
        danger : '#FF3737',
        warning : '#EED202',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1200px',
        xl: '1440px',
      },
    },
    fontFamily: {
      'sans': ['Poppins', 'Poppins',],
      'serif': ['Poppins', 'Poppins',],
      'mono': ['Poppins', 'Poppins',],
      'display': ['Poppins', ],
      'body': ['"Poppins"',],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
