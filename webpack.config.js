var path = require('path');
var webpack = require('webpack');

var libraryName = 'Library';

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: resolve('dist'),
    filename: libraryName + '.min.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {},
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    // }),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ],
  performance: {
    hints: false
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      include: [resolve('src')],
      use: {
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
        // options: {
        //   plugins: ['add-module-exports', 'transform-es2015-modules-umd'],
        //   presets: [['env', {
        //     modules: false,
        //     targets: {
        //       browsers: [
        //         '> 1%',
        //         'IE >= 6',
        //         'last 2 versions'
        //       ]
        //     }
        //   }]],
        //   comments: false
        // }
      }
    }]
  }
};
