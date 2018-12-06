const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new WebpackPwaManifest({
      name: 'WeatherApp',
      short_name: 'WeatherApp',
      description:
        'Find out the current weather forecast in any city around the world.',
      theme_color: '#ffffff',
      background_color: '#76afeb',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/images/icon-72x72.png'),
          size: '72x72'
        },
        {
          src: path.resolve('src/images/icon-96x96.png'),
          size: '96x96'
        },
        {
          src: path.resolve('src/images/icon-128x128.png'),
          size: '128x128'
        },
        {
          src: path.resolve('src/images/icon-144x144.png'),
          size: '144x144'
        },
        {
          src: path.resolve('src/images/icon-152x152.png'),
          size: '152x152'
        },
        {
          src: path.resolve('src/images/icon-192x192.png'),
          size: '192x192'
        },
        {
          src: path.resolve('src/images/icon-384x384.png'),
          size: '384x384'
        },
        {
          src: path.resolve('src/images/icon-512x512.png'),
          size: '512x512'
        }
      ]
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'weather-app',
      filename: 'service-worker.js',
      maximumFileSizeToCacheInBytes: 8388608,
      staticFileGlobs: ['docs/*.{js,html,css,jpg,png}'],
      stripPrefix: 'docs/',
      directoryIndex: '/',
      verbose: true,
      minify: true,
      navigateFallback: 'https://murillo94.github.io/weather-pwa/',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/murillo94.github.io\/weather-pwa/,
          handler: 'networkFirst',
          options: {
            cache: {
              maxEntries: 10,
              name: 'weather-data-cache'
            }
          }
        }
      ]
    })
  ]
};
