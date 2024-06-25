import js from '@eslint/js';
import airbnbBase from 'eslint-config-airbnb-base';
import jestPlugin from 'eslint-plugin-jest';

export default [
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'LabeledStatement',
          message: 'Labeled statements are not allowed.',
        },
        {
          selector: 'WithStatement',
          message: 'With statements are not allowed.',
        },
      ],
    },
    files: ['*.js'],
  },
  airbnbBase,
  {
    env: {
      browser: false,
      es6: true,
      jest: true,
    },
  },
];
