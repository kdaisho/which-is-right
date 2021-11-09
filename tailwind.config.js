module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        main: 'calc(100vh - 4rem)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
