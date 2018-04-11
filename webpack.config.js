const HtmlWebPackPlugin = require("html-webpack-plugin");
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        type: 'javascript/auto',
        test: /\.(jpg|png|gif|json)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
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
        minifyURLs: true,
      },
      inject: true,
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'weather-app',
      filename: 'service-worker.js',
      maximumFileSizeToCacheInBytes: 8388608,
      staticFileGlobs: ['dist/*.{js,html,css,jpg,png}'],
      stripPrefix: 'dist/',
      directoryIndex: '/',
      verbose: true,
      minify: true,
      navigateFallback: 'https://murillo94.github.io/weather-pwa',
      runtimeCaching: [
        {
          urlPattern: /^http:\/\/murillo94.github.io\/weather-pwa/,
          handler: 'networkFirst',
          options: {
            cache: {
              maxEntries: 10,
              name: 'weather-data-cache'
            }
          }
        }
      ]
    }),
  ]
}
