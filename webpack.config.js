const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

// const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');

// const PATHS = {
//   entryPoint: path.resolve(__dirname, 'src/blizzapi.ts'),
//   dist: path.resolve(__dirname, 'dist'),
// };

// module.exports = {
//   mode: 'production', // suppress warning
//   entry: {
//     blizzapi: PATHS.entryPoint,
//     'blizzapi.min': PATHS.entryPoint,
//   },
//   output: {
//     path: PATHS.dist,
//     filename: '[name].js',
//     library: 'BlizzAPI',
//     libraryTarget: 'umd',
//     umdNamedDefine: true
//   },
//   resolve: {
//     extensions: ['.ts', '.js'],
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [{
//       test: /\.tsx?$/,
//       loader: 'ts-loader',
//       exclude: /node_modules/,
//     }],
//   },
//   optimization: {
//     minimize: true,
//     minimizer: [
//       new TerserPlugin({
//         include: /\.min\.js$/,
//         parallel: true,
//         terserOptions: {
//           format: {
//             comments: /License/i,
//           },
//           parse: {},
//           compress: {},
//           mangle: {
//             toplevel: true,
//           },
//           output: null,
//           toplevel: false,
//           nameCache: null,
//         },
//       }),
//     ],
//   },
// };
