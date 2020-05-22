/* eslint-disable no-console */
const babelConfig = require('./babel.config')
require('@babel/register')({ ...babelConfig })
require('asset-require-hook')({
	extensions: ['jpg', 'png', 'svg', 'gif', 'woff2'],
	name: 'assets/[name].[ext]',
	publicPath: '/',
})
require('asset-require-hook')({
	extensions: ['woff2'],
	name: 'assets/fonts/[name].[ext]',
	publicPath: '/',
})

require('./src/server')
