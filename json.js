module.exports = {
  extends: ['plugin:json/recommended'],
  rules: {
    'json/*': ['error', { allowComments: true }]
  }
};
