const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].js",
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "My App",
            filename: "index.html",
            template: "./src/assets/index.html",
        }),
    ],

};