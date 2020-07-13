module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.scss'],
  theme: {
    extend: {
      colors: {
        base: '#44474c',
        black: '#2c2d30',
        white: '#fafafa',
        gray: '#747a82',
        subtle: '#ededed',
        primary: '#00b1d4',
        // brands
        twitter: '#55acee',
        linkedin: '#0277b5',
        dribbble: '#ea4d89',
        spotify: '#31cd65',
        instagram: '#262626',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      inset: {
        '1/2': '50%',
      },
    },
  },
  variants: {},
  plugins: [],
}
