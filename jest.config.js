/* -----------------------------------------------------------------------------
 * jest config
 * -------------------------------------------------------------------------- */

module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false,
      disableSourceMapSupport: true
    }
  },
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testMatch: ['**/*.test.(ts|tsx)']
}
