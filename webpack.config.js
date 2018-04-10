var webpack = require('webpack');
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    //new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'weather-app',
      filename: 'service-worker.js',
      staticFileGlobs: ['dist/*.{js,html,css,jpg,png}'],
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      minify: true,
      stripPrefix: 'dist/',
      runtimeCaching: [
        {
          urlPattern: /^http:\/\/localhost:8080/,
          handler: 'networkFirst'
        }
      ]
    }),
  ]
}
