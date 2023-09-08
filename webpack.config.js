const path = require('path');

module.exports = {
  // other webpack configuration settings 
  target: "node",
  resolve: {
    fallback: {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
    }
  }, 
  entry: './src/index.js', // Entry point
  output: {
    filename: 'bundle.js', // Name of the bundled JavaScript file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use babel-loader for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // Use style-loader and css-loader for CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: './dist', // Serve files from the 'dist' directory
    port: 8080, // Port for the development server
  },

};
