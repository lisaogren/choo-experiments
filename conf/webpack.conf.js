const webpack = require('webpack')
const conf = require('./gulp.conf')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  module: {
    rules: [
      // pre loaders
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'standard-loader'
      },
      // loaders
      {
        test: /.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /.html$/,
        loaders: [
          'html-loader'
        ]
      },
      {
        test: /\.(ttf|eot|svg|jpg|jpeg|png|gif)(\?[\s\S]+)?$/, loader: 'file-loader'
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      }
    })
  ],
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
  },
  entry: [
    'font-awesome-loader',
    `./${conf.path.src('index')}`
  ]
}
