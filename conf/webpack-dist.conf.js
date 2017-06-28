const webpack = require('webpack')
const conf = require('./gulp.conf')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const pkg = require('../package.json');
const autoprefixer = require('autoprefixer')

module.exports = {
  module: {
    rules: [
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
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { modules: false }]],
            plugins: ['syntax-dynamic-import']
          }
        }]
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
  resolve: {
    modules: [
      'node_modules',
      'src'
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new UglifyJSPlugin({
      compress: {unused: true, dead_code: true, warnings: false} // eslint-disable-line camelcase
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      }
    })
    // new ExtractTextPlugin('index-[contenthash].css')
    // new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
  ],
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
  },
  entry: [
    `./${conf.path.src('index')}`
  ]
}
