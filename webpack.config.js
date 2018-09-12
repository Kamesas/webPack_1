const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "dist/"
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("styles.css")]
};

module.exports = (env, options) => {
  let producnion = options.mode === "production";

  conf.devtool = producnion ? "source-map" : "eval-sourcemap";
  return conf;
};
