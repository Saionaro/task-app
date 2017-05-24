'use strict';

const Webpack = require('webpack'),
   ExtractTextPlugin = require('extract-text-webpack-plugin'),
   NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
   entry: {
      boundle: ['./src/index.js']
   },
   output: {
      path: __dirname + '/dist',
      publicPath: '/dist/',
      filename: '[name].js',
      chunkFilename: '[name].js',
      library: '[name]'
   },
   resolve: {
      extensions: ['.js', '.jsx', '.less']
   },
   devServer: {
      contentBase: __dirname + '/dist',
      historyApiFallback: {
         index: 'index.html'
      }
   },
   // watch: NODE_ENV === 'development',
   watch: true,
   devtool: NODE_ENV === 'development' ? 'sheap-inline-module-source-map' : false,
   plugins: [
      new ExtractTextPlugin({
         filename: 'styles.css',
         allChunks: true
      }),
      new Webpack.optimize.CommonsChunkPlugin({
         name: 'core',
         minChunks: 2
      }),
      new Webpack.NoEmitOnErrorsPlugin()
   ],
   module: {
      loaders: [{
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader'
      }, {
         test: /\.less$/,
         loader: ExtractTextPlugin.extract({
            use: 'css-loader!autoprefixer-loader?browsers=last 6 versions!less-loader'
         })
      }, {
         test: /\.(png|jpg|svg)$/,
         loader: 'url-loader?name=[path][name].[ext]&limit=2048'
      }]
   }
};

if(NODE_ENV === 'production') {
   module.exports.plugins.push(new Webpack.optimize.UglifyJsPlugin({
      compress: {
         warnings: false,
         drop_console: true,
         unsafe: true
      }
   }));
}