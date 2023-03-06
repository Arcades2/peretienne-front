/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  globals: {
    React: 'writable',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/prop-types': 0,
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: ['then'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
  },
};
