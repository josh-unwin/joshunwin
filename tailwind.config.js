module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    fontFamily: {
      'nunito': ['Nunito'],
    },
    extend: {
      colors: {
        'josh-blue': '#70D6FF',
        'body-gray': '#363537',
        'link-blue': '#6dc7eb',
      }
    },
  },
  variants: {display: ['group-hover']},
  plugins: [],
}
