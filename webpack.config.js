const path = require('path');
const dotenv = require('dotenv');

const processEnv = process.env.NODE_ENV || 'development';
const config = dotenv.config({ path: `.env.${processEnv}` })
const processDebug = process.env.DEBUG;

const pkg = require('./package.json');
const webpack = require('webpack'); // for react hot loader
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const WEBPACK_CONFIG = {
  mode: processEnv,
  entry: {
    app: ['react-hot-loader/patch', './app/index.js']
  },
  resolve: {
    modules: [path.resolve(__dirname, 'app'), 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
    alias: {
    'mapbox-gl$': resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js'),
    //   TODO: 'react-dom': '@hot-loader/react-dom'
    }
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
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: './dist',
    stats: {
      warnings: false
    }
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new CleanWebpackPlugin(),
    // TODO: new NamedModulesPlugin(), 
    // - this handles prepended module ID's for complex webpack configs
    new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG', 'MAPBOX_ACCESS_TOKEN']),
    new HtmlWebpackPlugin({
      template: './app/index.ejs',
      templateParameters: {
        'env': processEnv,
        'debug': processDebug,
        'pkgName': pkg.name,
        'pkgDescription': pkg.description,
        'pkgVersion': pkg.version
      }
    }),
  ]
};

module.exports = function(env, argv) {
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