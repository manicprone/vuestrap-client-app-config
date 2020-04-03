import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/plugin.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    uglify(),
  ],
}
