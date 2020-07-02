const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [{ test: /\.scss$/, use: "raw-loader" }],
  },
  //   plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
};

module.exports = config;
