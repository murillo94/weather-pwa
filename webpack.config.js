const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const config = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './docs'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

const plugins = [
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
    fingerprints: false,
    inject: true,
    ios: {
      'apple-mobile-web-app-title': 'WeatherApp',
      'apple-mobile-web-app-status-bar-style': 'white'
    },
    icons: [
      {
        src: path.resolve('src/images/icon-72x72.png'),
        size: '72x72',
        ios: true
      },
      {
        src: path.resolve('src/images/icon-96x96.png'),
        size: '96x96',
        ios: true
      },
      {
        src: path.resolve('src/images/icon-128x128.png'),
        size: '128x128',
        ios: true
      },
      {
        src: path.resolve('src/images/icon-144x144.png'),
        size: '144x144',
        ios: true
      },
      {
        src: path.resolve('src/images/icon-152x152.png'),
        size: '152x152',
        ios: true
      },
      {
        src: path.resolve('src/images/icon-192x192.png'),
        size: '192x192',
        ios: true
      },
      {
        src: path.resolve('src/images/icon-384x384.png'),
        size: '384x384',
        ios: true
      },
      {
        src: path.resolve('src/images/icon-512x512.png'),
        size: '512x512',
        ios: 'startup'
      }
    ]
  })
];

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    const cache = new SWPrecacheWebpackPlugin({
      cacheId: 'weather-app',
      filename: 'service-worker.js',
      maximumFileSizeToCacheInBytes: 8388608,
      staticFileGlobs: ['docs/*'],
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
    });

    plugins.push(cache);
  }

  if (argv.hot) {
    config.output.filename = '[name].[hash].js';
  }

  return {
    ...config,
    plugins
  };
};
