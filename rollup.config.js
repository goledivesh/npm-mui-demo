import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'

const packageJson = require('./package.json');

export default [
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      postcss()
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/components/index.ts',
    output: {
      file: packageJson.types,
    },
    plugins: [dts.default()],
    external: [/\.css/] // Exclude CSS files from the type definitions
  }
]