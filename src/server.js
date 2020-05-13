/* eslint-disable no-console */
import express from 'express'
import dotenv from 'dotenv'
import html from './html'

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('../webpack.config')

dotenv.config()

const { ENV, PORT } = process.env
const isDev = ENV === 'development'
const app = express()
console.log(`This is ${ENV}`)

if (isDev) {
	const compiler = webpack(webpackConfig)
	const serverConfig = { port: PORT }
	app.use(webpackDevMiddleware(compiler, serverConfig))
}

const renderApp = (req, res) => {
	res.send(html())
}

app.get('*', renderApp)

app.listen(PORT, (err) => {
	if (err) console.error(err)
	else console.log(`Server running in port ${PORT}`)
})
