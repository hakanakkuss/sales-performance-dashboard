/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./components/**/*.{js,vue,ts,js}",
    "./components/content/**/*.{js,vue,ts,js}",
    "./layouts/**/*.vue",
    './content/**/*.{md,html,js}',
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts,vue,js}",
    "./constants/**/*.{js,ts,vue,js}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      // 'body': ['Roboto'],
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: '480px',
      // md: '768px',
      md: '1024px',
      lg: '976px',
      // xl: '1440px',
      xl: '1280px',
      "2xl": '1440px',
    },

    width: {
      192: '48rem'
    },
    gap: {
      "28": "28rem"
    },
    // borderRadius: {
    //   "4xl": "2.0rem"
    // },
    fontSize: {
      '2xl': ['1.75rem', {
        lineHeight: '100%',
        letterSpacing: '-0.02em',
      }],
      '6xl': ['4rem', {
        lineHeight: '100%',
        letterSpacing: '-0.02em',
      }],
      '7xl': ['5rem', {
        lineHeight: '100%',
        letterSpacing: '-0.02em',
      }]
    },
    backgroundImage: {
      'bg1': "url('/assets/img/bg1.png')",
      'icon1': "url('/assets/img/icon1.svg')",
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '100%': '100%',
      '16': '4rem',
    },
    listStyleImage: {
      checkmark: 'url("/assets/img/checkmark-white.svg")',
    },
    colors: {
      "black": "#0F172A",
      "menu-text": "#17262E",
      "submenu-head": "#1F1F1F",
      "badge-green": "#C4FFD2",
      "badge-green-title": "#C4FFD2",
      "transparent": 'transparent',
      "current": 'currentColor',
      'white': '#ffffff',
      'gray': {
        250: '#F0F0F0',
        350: '#D9D9D9',
        910: '#11192c'
      },
      'blue': {
        650: '#252640',
      },
      'neutral': {
        450: "#A3A7B1"
      },
      'green': {
        50: '#EFFEF4',
        60: '#EDFFF1',
        100: '#DBFDE7',
        200: '#B9F9CF',
        300: '#82F3AB',
        400: '#44E47E',
        500: '#1DD761',
        550: '#1BD732',
        600: '#10A949',
        700: '#11843C',
        800: '#136833',
        900: '#11562C',
        945: '#2D584E',
        950: '#033016',

      },

    },
  },
  plugins: [],
}
