const path = require('path');

module.exports = {
  entry: "./app/index.js", 

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
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
          presets: ["es2015"]
        },
      },
    ],
  },

  resolve: {

    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // directories where to look for modules

    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used
  },

  devtool: "source-map",
  context: __dirname,

  target: "web",

  devServer: {
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    noInfo: true, // only errors & warns on hot reload
  },
}