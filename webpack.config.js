var webpack = require("webpack");

module.exports = {
  entry: {
    app: './public/client.js',
  },
  output: {
    path: './public/scripts/',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      },
    ]
  },
  plugins: [
	new webpack.DefinePlugin({
	  'process.env.NODE_ENV': '"production"'
	}),
	new webpack.optimize.UglifyJsPlugin({
	  compress: {
	    warnings: false
	  }
	})
  ]
};