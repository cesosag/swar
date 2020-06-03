const path = require('path')
const nodeExternals = require('webpack-node-externals')

require('dotenv').config()

const { ENV } = process.env

const isDev = ENV === 'development'

module.exports = {
	mode: ENV,
	entry: {
		server: path.resolve(__dirname, 'index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: isDev ? '[name].js' : '[name]-[hash].js',
	},
	target: 'node',
	node: {
		__dirname: false,
		__filename: false,
	},
	externals: [nodeExternals()],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
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
							name: 'assets/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.woff2?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/fonts/[name].[ext]',
						},
					},
				],
			},
		],
	},
}
