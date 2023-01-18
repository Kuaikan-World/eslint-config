module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', './sonar.js'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error'
  }
};
