module.exports = {
  extends: ['./javascript.js', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12
  },
  env: {
    node: true,
    es2021: true,
    browser: true
  },
  overrides: [
    {
      files: ['./**/*.ts'],
      extends: ['./typescript.js', 'eslint-config-prettier']
    }
  ]
};
