module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-confusing-arrow': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 1,
    'max-len': 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
};
