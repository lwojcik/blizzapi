import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import externalGlobals from "rollup-plugin-external-globals";
import { terser } from "rollup-plugin-terser";

const name = require('./package.json').main.replace(/\.js$/, '')

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: id => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [
      esbuild(),
      externalGlobals({
        axios: 'axios',
      }),
    ],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
        exports: 'default',
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
        exports: 'default',
      },
      {
        file: `${name}.umd.js`,
        format: 'umd',
        name: 'BlizzAPI',
        sourcemap: true,
        exports: 'default',
      },
      {
        file: `${name}.umd.min.js`,
        format: 'umd',
        name: 'BlizzAPI',
        sourcemap: true,
        exports: 'default',
        plugins: [terser()],
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
];
