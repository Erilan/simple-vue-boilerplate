'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // we define our entry points for JS and SASS files
  entry: [
    './src/main.js',
    './src/assets/style/main.scss'
  ],
  // configuration for dev server with hot reload
  devServer: {
    contentBase: './app',
    historyApiFallback: true,
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  // loader to handle files
  module: {
    rules: [
      // all .vue files will be processed by the vue loader
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      // all .scss files will be processed by style laoder, css loader and sass laoder
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      // all images (png, jpg, jpeg, gif, svg) will be available
      // /assets/images/cat.jpg will be transformed and exposed as /a59b8656c03acc0c9745d2c515dc7364.jpg
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
    ]
  },
  plugins: [
    // hot reload activation
    new webpack.HotModuleReplacementPlugin(),
    // extract generated css in a specific file
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new VueLoaderPlugin(),
    // set the HTML entry point, ans tell webpack to inject generated files (css, js) in this template
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],
  output: {
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json', '.scss']
  }
}
