const path = require('path')

require('dotenv').config()

module.exports = {
	mode: process.env.ENV,
	entry: path.resolve(__dirname, 'src', 'index.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules|dist/,
				enforce: 'pre',
				loader: 'eslint-loader',
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(png|gif|jpg|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/[hash].[ext]',
						},
					},
				],
			},
		],
	},
}
