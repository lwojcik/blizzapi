import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import externalGlobals from 'rollup-plugin-external-globals';
// import { terser } from "rollup-plugin-terser";
// import typescript from '@rollup/plugin-typescript';

const name = require('./package.json').main.replace(/\.js$/, '');

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [
      esbuild({
        sourceMap: false,
        minify: true,
      }),
      externalGlobals({
        axios: 'axios',
        tslib: 'tslib',
      }),
    ],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
      },
      {
        file: `${name}.mjs`,
        format: 'es',
      },
      {
        file: `${name}.umd.js`,
        format: 'umd',
        name: 'BlizzAPI',
      },
    ],
    context: 'this',
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
];
