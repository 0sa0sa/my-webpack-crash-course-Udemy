// npx webpack-dev-server --open でサーバ立ち上げ
// webpackについてのサイト参照
// https://webpack.js.org/configuration/

// npx webpack --config filename.config.js で 指定したファイルをwebpackの設定として読み込んでくれる

//outputのpathはabsolute path

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const outputPath = path.resolve(__dirname, "dist");
console.log({ __dirname });
console.log({ outputPath });

module.exports = {
  // entry モジュールバンドルの対象
  entry: "./src/index.js",

  // output 出力関係
  output: {
    filename: "main.js",
    path: outputPath,
  },

  // css-;loaderを使う！
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: "url-loader",
        options: {
          limit: 2048,
          name: "./images/[name].[ext]",
        },
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },

  // devServer: npx webpack-dev-server --openで立ち上げるpathをabsolute pathで設定
  devServer: {
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      // OptimizeCSSAssetsPlugin
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};
