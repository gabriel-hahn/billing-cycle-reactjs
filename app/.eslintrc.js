module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
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
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'import/extensions': [
      'error', 'never'
    ],
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-globals': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/camelcase': 'off',
    'react/jsx-one-expression-per-line': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
