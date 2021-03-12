import ts from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import path from 'path'

export default {
  input: 'src/index.ts',
  output: {
    format: 'iife',
    // global  弄个全局变量来接受
    // cjs  module.exports
    // esm export default
    // iife ()()
    // umd 兼容 amd + commonjs 不支持es6导入
    file: path.resolve(__dirname, 'dist/bundle.js'),
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts']
    }),
    ts({
      tsconfig: path.resolve(__dirname, 'tsconfig.json')
    }),
    serve({
      port: 3000,
      contentBase: '',
      openPage: '/public/index.html',
      open: true
    })
  ]
}