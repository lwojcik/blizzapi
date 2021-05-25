import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import externalGlobals from 'rollup-plugin-external-globals';

const name = require('./package.json').main.replace(/\.js$/, '');

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: id => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [
      esbuild({
        sourceMap: false,
        minify: true,
      }),
    ],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        globals: {
          axios: 'axios',
        },
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        globals: {
          axios: 'axios',
        },
      },
    ],
    context: 'this',
  }),
  bundle({
    plugins: [
      esbuild({
        sourceMap: false,
        minify: true,
      }),
      externalGlobals({
        axios: 'axios',
      }),
    ],
    output: {
      file: `${name}.umd.js`,
      format: 'umd',
      name: 'BlizzAPI',
      globals: {
        axios: 'axios',
      },
    },
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
