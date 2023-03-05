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
          500: '#D5685A',
        },
        secondary: {
          500: '#fbfbfb',
          700: '#f9f9f9',
          900: '#f7f7f7',
        },
        customGray: {
          200: '#ebebeb',
          300: '#e4e4e4',
          400: '#d9d9d9',
          500: '#cfcfcf',
          600: '#bdbdbd',
        },
        customBlue: {
          300: '#737e86',
          500: '#58656F',
          700: '#2e3e4b',
          900: '#212C35'
        },
        customGreen: {
          200: '#7ce79e',
          500: '#27BE58',
        },
        icon: '#645454',
        alert: '#FC6363',
      },
      fontFamily: {
        'sans': ['Rubik', 'sans-serif'],
      },
      scale: {
        '70': '.7',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '1400': '1400ms',
        '1500': '1500ms',
        '1600': '1600ms',
        '1700': '1700ms',
        '1800': '1800ms',
        '1900': '1900ms',
        '2000': '2000ms',
      },
      translate: {
        '150': '600px',
        '170': '680px',
      },
      transitionDelay: {
        '750': '750ms',
      },
      screens: {
        '3xl': '1850px',
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