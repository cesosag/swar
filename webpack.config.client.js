/* eslint-disable prettier/prettier */
/* eslint-disable node/no-unpublished-require */
const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

require('dotenv').config()

const { ENV } = process.env

const isDev = ENV === 'development'

const entry = [path.join(__dirname, 'src', 'index.jsx')]
if (isDev) entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true')

module.exports = {
	mode: ENV,
	entry,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: isDev ? 'app.js' : 'app-[hash].js',
		publicPath: '/',
	},
	target: 'web',
	devtool: 'source-map',
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
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
		splitChunks: {
			chunks: 'async',
			name: true,
			cacheGroups: {
				vendors: {
					name: 'vendors',
					chunks: 'all',
					reuseExistingChunk: true,
					priority: 1,
					filename: isDev ? 'vendors.js' : 'vendors-[hash].js',
					enforce: true,
					test(module, chunks) {
						const name = module.nameForCondition && module.nameForCondition()
						return chunks.some(chunk => chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name))
					},
				},
			},
		},
	},
	plugins: [
		isDev ? new HotModuleReplacementPlugin() : () => {},
		!isDev ? new CompressionPlugin({
			test: /\.(js|css|html|svg)$/,
			algorithm: 'brotliCompress',
			filename: '[path].br[query]',
			minRatio: 0.8,
		}) : () => {},
		!isDev ? new CompressionPlugin({
			test: /\.(js|css|html|svg)$/,
			algorithm: 'gzip',
			filename: '[path].gz[query]',
			minRatio: 0.8,
		}) : () => {},
		!isDev ? new ManifestPlugin() : () => {},
	],
}
