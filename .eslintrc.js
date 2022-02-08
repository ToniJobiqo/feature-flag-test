module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // Supresses react props validation.
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-key': 'warn',
    // Eventually we could fix this one.
    'react/display-name': 'off',
  },
};
