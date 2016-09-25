const path = require('path')
const webpack = require('webpack')
//const buildDirectory = './dist/'

let webpackConfig = {
	entry: './app/index.jsx',
	output: {
		filename: 'bundle.js',
		publicPath: 'http://localhost:8090/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'jsx-loader?insertPragma=React.DOM&harmony',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
			}
		]
	},
	plugins: [],
	externals: {
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	},
	devtool: "inline-source-map",
	devserver: {
		hot: true,
		inline: true,
		poprt: 8080,
		historyApiFallback: true
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}

module.exports = webpackConfig