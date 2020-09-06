const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  mode: "production", //mode production or development 各自有默认插件;production自动tree shaking
  entry: {
    app: "./src/index.jsx",
    eager_parsing: "./js_performance/eager_parsing"
  },
  output: {
    path: `${__dirname}/build`,
    filename: "[name].[hash].bundle.js"
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: /src/,
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-react"]
        }
      },
      {
        test: /(\.css$)/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
          // {
          //   loader: 'postcss-loader'
          // }
        ]
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