module.exports = {
  extends: ['./javascript.js', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11
  },
  env: {
    node: true,
    es2021: true,
    browser: true
  }
};
