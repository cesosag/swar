/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { ServerLocation } from '@reach/router'
import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import App from './App'
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
	const styleSheet = new ServerStyleSheet()
	let htmlString
	let styleTags
	try {
		htmlString = renderToString(
			<StyleSheetManager sheet={styleSheet.instance}>
				<ServerLocation url={req.url}>
					<App />
				</ServerLocation>
			</StyleSheetManager>,
		)
		styleTags = styleSheet.getStyleTags()
	} catch (error) {
		console.error(error)
	} finally {
		styleSheet.seal()
	}
	res.send(html(htmlString, styleTags))
}

app.get('*', renderApp)

app.listen(PORT, (err) => {
	if (err) console.error(err)
	else console.log(`Server running in port ${PORT}`)
})
