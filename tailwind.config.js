/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#FC7785',
      secondary: '#6A67F3',
      tertiary: '#498CDA',
      quaternary: '#74B949',
      quinary: '#332E59',
      primaryHover: '#FF4F5F',
      dark: '#1F1B36',
      bg: '#261E3E',
      grey: '#878CA3',
      grey2: '#4F4F4F',
      grey3: '#62697A',
      light: '#F9F9F9',
      white: '#FFFFFF',
      lightBlue: '#DDE1EF',
      lightGrey: '#F8F9FD',
      borderGrey: '#F8F9FD',
      deepBlue: '#1C2B4F',
      yellow: '#E9B872',
      overlay: '#00337E',
      gray: '#F6F8FA',
      deepGrey: '#23273B',
      lemon: '#71C138',
      success: '#119606',
      off: '#EFF2FF',
      skyBlue: '#878CA3',
      brandBlue: '#0b3558',
      lighterGray: '#828282',
      brandBlueDull: '#476788',
      red: '#DA0060',
    },
    fontSize: {
      sm: '12px',
      normal: '15px',
      md: '18px',
      llx: '48px',
      smd: '15px',
      lg: '21.6px',
      gl: '25.92px',
      lx: '31.104px',
      xl: '31.104px',
      xll: '37.325px',
      xlll: '53.748px',
      xxl: '64.497px',
      xxxl: '70px'
    },
    // boxShadow: {
    //   normal: '0 8px 32px rgba(232, 232, 232, 0.25)',
    // },
    fontFamily: {
      gilroyRegular: ['Gilroy-Regular', 'sans-serif'],
      gilroyMd: ['Gilroy-Medium', 'sans-serif'],
      gilroyLight: ['Gilroy-Light', 'sans-serif'],
      gilroyHeavy: ['Gilroy-Heavy', 'sans-serif'],
      gilroyBold: ['Gilroy-Bold', 'sans-serif'],
    },
    lineHeight: {
      md: '50px',
      normal: '32px',
      loose: '40px',
    },
    extend: {},
  },
  plugins: [],
}

