/* eslint-disable no-console */
import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'
import html from './html'

dotenv.config()

const { ENV, PORT } = process.env
const isDev = ENV === 'development'
const app = express()
console.log(`This is ${ENV}`)

if (isDev) {
	const compiler = webpack(webpackConfig)
	const serverConfig = { port: PORT, hot: true }
	app.use(webpackDevMiddleware(compiler, serverConfig))
	app.use(webpackHotMiddleware(compiler))
}

const renderApp = (req, res) => {
	res.send(html())
}

app.get('*', renderApp)

app.listen(PORT, (err) => {
	if (err) console.error(err)
	else console.log(`Server running in port ${PORT}`)
})
