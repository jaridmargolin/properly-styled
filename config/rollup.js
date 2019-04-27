/* eslint-disable import/no-extraneous-dependencies */
/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import ts from 'rollup-plugin-typescript2'
import typescript from 'typescript'

/* -----------------------------------------------------------------------------
 * rollup config
 * -------------------------------------------------------------------------- */

export default {
  input: './src/index.ts',
  output: [
    { file: 'dist/index.js', format: 'cjs' },
    { file: 'dist/index.es.js', format: 'es' }
  ],
  plugins: [
    ts({
      typescript,
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          module: 'es2015',
          declaration: true,
          declarationDir: './dist/types'
        },
        exclude: ['node_modules', 'dist/**/*', '**/*.test.ts']
      }
    })
  ]
}
