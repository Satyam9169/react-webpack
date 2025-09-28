const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",
    mode: isProduction ? "production" : "development",

    output: {
      filename: "bundle.[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "", // for images & assets
      clean: true, // clean dist folder before build
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.scss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.hbs$/i,
          use: "handlebars-loader",
        },
        {
          test: /\.txt$/i,
          type: "asset/source", // treat as raw string
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource", // copy file to output
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.[contenthash].css",
      }),
      new HtmlWebpackPlugin({
        template: "./src/components/index.hbs",
        title: "Hello World",
        description: "Some description",
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          isProduction ? "production" : "development"
        ),
      }),
      ...(isProduction ? [new TerserPlugin()] : []), // minify only in production
    ],

    devtool: isProduction ? false : "inline-source-map",

    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 9000,
      open: true,
      hot: true,
    },
  };
};





/*
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
*/
