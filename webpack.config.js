module.exports = {
  entry: './src/app.js',
	devtool: 'source-map',
	debug: true,
  output: {
    path: __dirname,
    filename: './src/public/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
