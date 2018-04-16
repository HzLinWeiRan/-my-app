// http://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: 'airbnb',
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    indent: [2, 4],
    'linebreak-style': 0,
    'no-mixed-operators': 0,
    'react/jsx-indent': [2, 4],
    'react/self-closing-comp': 0,
    'react/jsx-filename-extension': [1, { "extensions": ['.js', '.jsx'] }],
    'react/jsx-indent-props': [2, 4],
    'react/no-array-index-key': 0,
    'react/jsx-closing-tag-location': 0,
    'react/prop-types': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-danger': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'comma-dangle': 0
     
  }
}
