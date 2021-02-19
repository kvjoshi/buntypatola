module.exports = {
  purge: {
    enabled: process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.indexOf("build") !== -1,
    content: [
      "./src/**/*.html",
      "./src/**/*.ts",
      "./projects/**/*.html",
      "./projects/**/*.ts"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  variants: {},
  plugins: [],
 }
