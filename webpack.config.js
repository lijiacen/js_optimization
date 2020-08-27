const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  // devServer: {
  //   port: 3000
  // },
  entry: {
    app: "./src/index.jsx"
  },
  output: {
    path: `${__dirname}/build`,
    filename: "[name].[hash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: /src/,
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["./build"]
    }),
    new HtmlWebpackPlugin({
      template: "template.html"
    })
  ]
};
