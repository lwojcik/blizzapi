// eslint-disable-next-line import/no-extraneous-dependencies
import dts from "rollup-plugin-dts";
// eslint-disable-next-line import/no-extraneous-dependencies
import esbuild from "rollup-plugin-esbuild";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const name = "dist/blizzapi";

const bundle = (config) => ({
  ...config,
  input: "src/index.ts",
  external: (id) => !/^[./]/.test(id),
});

// eslint-disable-next-line import/no-default-export
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
        format: "cjs",
        globals: {
          axios: "axios",
        },
      },
    ],
    context: "this",
  }),
  bundle({
    plugins: [
      esbuild({
        sourceMap: false,
        minify: true,
      }),
    ],
    output: {
      file: `${name}.umd.js`,
      format: "umd",
      name: "BlizzAPI",
      globals: {
        axios: "axios",
      },
    },
    context: "this",
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: "es",
    },
  }),
];
