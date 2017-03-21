const WebpackBrowserPlugin = require('webpack-browser-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  type: 'react-app',
  cssPreprocessors: {
    sass: {
      test: /\.s[ac]ss$/,
      loader: 'sass-loader',
      defaultConfig: 'sassLoader'
    }
  },
  webpack: {
    loaders: {
      'sass-css': {
        modules: false,
        localIdentName: '[name]__[local]__[hash:base64:5]'
      }
    },
    aliases: {
      // Enable use of 'img/file.png' paths in JavaScript and
      // "~images/file.png" paths in stylesheets to require an image from
      // src/images from anywhere in the the app.
      'img': path.resolve('src/images'),
      'fonts': path.resolve('src/fonts'),
      'sass': path.resolve('src/sass'),
      // Enable use of require('src/path/to/module.js') for top-down imports
      // from anywhere in the app, to promote writing location-independent
      // code by avoiding ../ directory traversal.
      'src': path.resolve('src')
    },

    extra: {
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              //presets: ['es2015', 'react']
              presets: ['es2015', 'react', 'react-hmre']

            }
          }
        ]
      },
      plugins: [
        new WebpackBrowserPlugin({port: 3003,url: 'http://localhost'}),
        new CopyWebpackPlugin([
          { from: 'src/img', to: 'img' },
          { from: 'src/fonts', to: 'fonts' },
        ])
      ],
    }
  }
}
