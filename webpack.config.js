const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //提取css
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //压缩优化

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: "production", //mode production or development 各自有默认插件;production自动tree shaking
  entry: {
    app: "./src/index.jsx"
  },
  output: {
    path: `${__dirname}/build`,
    filename: "[name].[hash].bundle.js",
    chunkFilename: "[name].[chunkhash:8].bundle.js" //按需加载拆分出的文件，打出的包
  },
  module: {
    noParse: /lodash/, //配置不需要打包的库
    rules: [
      {
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
        use: [
          isProduction
            ? {
                loader: MiniCssExtractPlugin.loader
              }
            : {
                loader: "style-loader"
              },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        //第三方库
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          minSize: 0,
          minChunks: 1,
          priority: 10, //优先级
          chunks: "initial"
        },
        common: {
          name: "common",
          test: /[\\/]src[\\/]/,
          chunks: "all",
          minSize: 0,
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["./build"]
    }),
    new HtmlWebpackPlugin({
      template: "template.html"
    }),
    // /* 动态链接库引用 */
    // new DllReferencePlugin({
    //   manifest: require(`${__dirname}/dll/react.manifest.json`)
    // })
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash:8].css"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      },
      canPrint: true
    })
  ]
};
