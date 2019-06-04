module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
