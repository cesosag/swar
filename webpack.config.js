const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')

require('dotenv').config()

const { ENV } = process.env

const isDev = ENV === 'development'

const entry = [path.resolve(__dirname, 'src', 'index.jsx')]
if (isDev) entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true')

module.exports = {
	mode: ENV,
	entry,
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
							name: 'assets/[name].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [
		isDev ? new HotModuleReplacementPlugin() : () => {},
	],
}
