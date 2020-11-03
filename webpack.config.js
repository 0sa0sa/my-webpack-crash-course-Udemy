// npx webpack-dev-server --open でサーバ立ち上げ
// webpackについてのサイト参照
// https://webpack.js.org/configuration/

// npx webpack --config filename.config.js で 指定したファイルをwebpackの設定として読み込んでくれる

//outputのpathはabsolute path

const path = require("path");

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
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: "url-loader",
        options: {
          limit: 2048,
          name: "./images/[name].[ext]",
        },
      },
    ],
  },

  // devServer: npx webpack-dev-server --openで立ち上げるpathをabsolute pathで設定
  devServer: {
    contentBase: outputPath,
  },
};
