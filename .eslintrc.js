/* -----------------------------------------------------------------------------
 * eslint config
 * -------------------------------------------------------------------------- */

module.exports = {
  root: true,
  extends: ['standard', 'standard-react'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/issues/363
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: { jest: true }
    }
  ]
}
