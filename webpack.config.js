const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./index.js"
  },
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: "./node_modules/@webcomponents/webcomponentsjs/bundles",
        to: "webcomponentsjs/bundles"
      }
    ]),
    new HtmlWebpackPlugin({ template: "index.html", inject: "head" })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  }
};
