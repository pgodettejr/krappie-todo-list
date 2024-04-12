const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
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