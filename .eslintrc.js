module.exports = {
  env: {
    browser: true,
    node: false,
  },
  extends: [],
  ignorePatterns: [
    'node_modules/*',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
