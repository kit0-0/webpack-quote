const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  {
    index : path.resolve(__dirname,'./src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name]bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'./src/index.html')
      }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'build'),
    port: 8080,
  },
};
