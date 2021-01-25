/* eslint-disable no-undef */
module.exports = {
  // Add any files in here that are using tailwind classes, so that they can be included in the final build:
  purge: ['src/*.html', 'src/**/*.html','src/*.js', 'src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // colors: {
    //   'darkBlue-500': 'var(--darkBlue-500)',
    //   'darkBlue-600': 'var(--darkBlue-600)',
    // },
    // backgroundColor: theme => ({
    //   ...theme('colors'),
    //   'darkBlue-500': 'var(--darkBlue-500)',
    //   'darkBlue-600': 'var(--darkBlue-600)',
    // }),
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

// for reference: https://tailwindcss.com/docs/optimizing-for-production