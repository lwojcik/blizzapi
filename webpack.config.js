const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/index.ts'),
  output: {
      filename: 'dist/index.js',
      path: __dirname
  },
  module: {
      rules: [
          {
              test: /\.ts?$/,
              loader: 'ts-loader',
              exclude: /node_modules/,
          },
      ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      'classes': path.resolve(__dirname, 'src/classes/'),
      'constants': path.resolve(__dirname, 'src/constants/'),
      'helpers': path.resolve(__dirname, 'src/helpers/'),
      'utils': path.resolve(__dirname, 'src/utils/'),
    }
  },
}
