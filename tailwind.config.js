export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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