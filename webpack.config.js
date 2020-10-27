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
};
