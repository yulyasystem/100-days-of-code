const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + "/day1/src/app/index.js",
  output: { // files go there 
    filename: '[name].js',
    path: path.resolve(__dirname, '/day1/dist'), //generated bundle 
    publicPath: '/' //public URL in browser
  },
  plugins: [ //array of plugins to build a chunk
    new HtmlWebpackPlugin({
      template: __dirname + "/day1/src/public/index.html",
      inject: 'body'
    })
  ],
  devServer: {
    overlay: true,
    contentBase: '/day1/src/public', //source of static assets
    port: 7700,

  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  }
}