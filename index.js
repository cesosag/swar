/* eslint-disable no-console */
const babelConfig = require('./babel.config')
require('@babel/register')({ ...babelConfig })
require('asset-require-hook')({
	extensions: ['jpg', 'png', 'svg', 'gif'],
	name: 'assets/[name].[ext]',
	publicPath: '/',
})

require('./src/server')
