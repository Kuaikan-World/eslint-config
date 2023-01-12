module.exports = {
  extends: ['./javascript.js', 'eslint-config-prettier'],
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
