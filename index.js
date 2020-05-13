/* eslint-disable no-console */
const fs = require('fs')

const getBabelConf = () => {
	try {
		return JSON.parse(fs.readFileSync(`${__dirname}/.babelrc`))
	} catch (err) {
		console.error(err)
		return err
	}
}

const { presets } = getBabelConf()
require('@babel/register')({ presets })

require('./src/server')
