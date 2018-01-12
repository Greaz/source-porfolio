const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./app/index.js", 

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015","react"]
        },
      },
      {
        test: /\.s?css$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
      {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        'url-loader?limit=10000',
      ]
    },
    ],
  },

  resolve: {

    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // directories where to look for modules
  },

  devtool: "source-map",
  context: __dirname,

  target: "web",

  devServer: {
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    noInfo: true, // only errors & warns on hot reload
  },
  plugins: [new HtmlWebpackPlugin()]
}