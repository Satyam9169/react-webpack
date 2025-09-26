// const { type } = require("os");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin"); //TerserPlugin is a Webpack plugin that minifies / compresses your JavaScript code.
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // By default, this plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "", // for image path folder
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"], //
            plugins: ["@babel/plugin-proposal-class-properties"], // this plugin
            //sourceType: "module", // ← THIS IS THE KEY FIX
          },
        },
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3kilobytes // this way to reduce the size
          },
        },
      },
      {
        test: /\.txt/,
        type: "asset/source", // this is good for file optimization
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        // use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], 
        // use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      //it will create new folder and added the some meta data in html file
      // filename: "subfolder/custome_filename.html",
      title: "Hello World",
      template: "./src/components/index.hbs",
      description: "some description",
    }),
  ],
};