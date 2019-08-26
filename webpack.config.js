const path = require('path');

// const webpack = require('webpack'); // for react hot loader
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const WEBPACK_CONFIG = {
  // TODO: mode: 'development'
  entry: {
      app: './src/index.js'
  },
  resolve: {
    modules: ['./src', 'node_modules'],
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'inline-source-map', // eval-source-map? 
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      use: 'file-loader',
    },{
      test: /\.(png|gif|jpe?g)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            emitFile: true
          }
        }
      ]
    }, {
      test: /\.(atlas)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            emitFile: true
          }
        }
      ]
    }]
  },
  target: 'web',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ]
};

module.exports = function(env, argv) {
  console.log(WEBPACK_CONFIG);
  return WEBPACK_CONFIG;

  // multiple build environments: (see webpack.config.local.js)

  // return {
  //   mode: env.production ? 'production': 'development',
  //   devtoo: env.production ? 'source-maps': 'eval',
  //   plugins: [
  //     new TerserPlugin({
  //       terserOptions: {
  //         compress: argv['optimize-minimal'] // only if -p or --optimize-minimize were passed
  //       }
  //     })
  //   };
}