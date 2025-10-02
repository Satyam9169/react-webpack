const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    'hello-world': "./src/index.js",
    'kiwi': "./src/kiwi.js",
  },
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.hbs$/,
        use: "handlebars-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.txt$/i,
        type: "asset/source",
      },
    ],
  },
  plugins: [
    //for hello world
    // new HtmlWebpackPlugin({
    //   template: "./src/components/index.hbs",
    //   title: "Hello World",
    //   description: "Some description",
    //   minify: false,
    // }),
    // This is for the where we are doing the single
    // page code splitting

    // This is for the hello page
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['hello-world'],
      template: "./src/components/index.hbs",
      title: "Hello World",
      description: "Hello World page",
      minify: false,
    }),

    // kiwi page
    new HtmlWebpackPlugin({
      filename: 'kiwi.html',
      chunks: ["kiwi"],
      template: './src/components/index.hbs',
      title: 'Kiwi Page',
      description: 'Kiwi page',
      minify: false,
    })
  ],
};
