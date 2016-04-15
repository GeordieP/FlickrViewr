var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'public/js');

// pass min arg into webpack to use uglifyJS ( 'webpack --min ')
var MINIFY = process.argv.indexOf('--min') !== -1 || false;

var config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js?/,
				include: APP_DIR,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	plugins: MINIFY ? [
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		})
	] : []
};
module.exports = config;