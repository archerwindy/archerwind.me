var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/root'
  ],
  output: {
    path: path.join(__dirname, 'publish'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('css/style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: [
          'babel',
          'eslint-loader'
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader', 
          'css-loader!sass-loader?includePaths[]=' 
          + path.resolve(__dirname, './node_modules/compass-mixins/lib')
        )
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/,
        loaders: [ 'url-loader?limit=0' ]
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]" 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader?limit=1024&name=fonts/[name].[ext]" 
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/sass/")]
  },
};
