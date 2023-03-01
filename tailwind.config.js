export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#E48383',
          500: '#D5685A'
        },
        secondary: {
          500: '#fbfbfb',
          700: '#f9f9f9',
          900: '#f7f7f7',
        }
      },
      fontFamily: {
        'sans': ['Rubik', 'sans-serif'],
      },
      scale: {
        '70': '.7',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
};