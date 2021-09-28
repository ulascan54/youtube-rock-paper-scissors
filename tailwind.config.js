module.exports = {
  mode:'jit',
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'dark-text':'hsl(229, 25%, 31%)',
        'score-text':'hsl(229, 64%, 46%)',
        'header-outline':'hsl(217, 16%, 45%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
