const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { optimize } = require("webpack");
const ASSETS_PATH = process.env.ASSETS_PATH || "/";
module.exports = {
  mode: "production",
  entry: {
    //  main: "./main.js",
    button: "./button.js"
  },
  output: {
    publicPath: ASSETS_PATH
  },
  module: {
    noParse: /webcomponents/,
    rules: [
      {
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: "file-loader",
        query: { name: "[name].[hash:8].[ext]" }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new CopyPlugin([
      {
        from: "./index.html",
        to: "index.html"
      }
    ])
  ]
};
