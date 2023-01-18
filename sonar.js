module.exports = {
  extends: ['plugin:sonarjs/recommended'],
  plugins: ['sonarjs'],
  rules: {
    'sonarjs/cognitive-complexity': ['error', 30]
  }
};
