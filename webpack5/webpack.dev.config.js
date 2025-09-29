const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // dev: inject in JS
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"], // dev: inject in JS
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
});
