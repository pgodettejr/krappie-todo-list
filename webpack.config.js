const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // devtool: 'eval', <-- In case we want to use this as a source map to find errors easier in our code later on
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Krappie To-Do List',
      template: './src/index.html',
      inject: 'body',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true, <-- In case we want to clean up the dist folder later on
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Why isn't the image rule below a dev dependency for Webpack in the package.json file?
      // REMINDER: there was an error regarding absolute file path (the internet link) and relative file path (local file in folder) before. Check TOP Discord previous comments
      // The error was a "Not Found" IIRC. Webpack would find the image in the local project and send it to dist, but image showed up broken on the actual website.
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};