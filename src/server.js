/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { ServerLocation } from '@reach/router'
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import helmet from 'helmet'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import getManifest from './getManifest'

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
} else {
	const MIME_TYPES = {
		js: 'application/javascript',
		html: 'text/html',
		css: 'text/css',
		svg: 'image/svg+xml',
	}
	app.use((req, res, next) => {
		if (!req.hashManifest) req.hashManifest = getManifest()
		next()
	})
	app.get(/\.(js|css|html|svg)$/, (req, res, next) => {
		const ext = req.url.split('.').pop()
		const compressionMethod = req.header('Accept-Encoding').includes('br') ? 'br' : 'gzip'
		const compressionExt = compressionMethod === 'gzip' ? 'gz' : compressionMethod
		req.url = `${req.url}.${compressionExt}`
		res.set('Content-Encoding', compressionMethod)
		res.set('Content-Type', `${MIME_TYPES[ext]}; charset=UTF-8`)
		next()
	})
	app.use(express.static(path.resolve(__dirname, '..', 'dist')))
	app.use(helmet())
	app.use(helmet.permittedCrossDomainPolicies())
	app.disable('x-powered-by')
}

const renderApp = (req, res) => {
	const helmetContext = {}
	const styleSheet = new ServerStyleSheet()
	let helmetObject
	let htmlString
	let styleTags
	try {
		htmlString = renderToString(
			<HelmetProvider context={helmetContext}>
				<StyleSheetManager sheet={styleSheet.instance}>
					<ServerLocation url={req.url}>
						<App />
					</ServerLocation>
				</StyleSheetManager>
			</HelmetProvider>,
		)
		helmetObject = helmetContext.helmet
		styleTags = styleSheet.getStyleTags()
	} catch (error) {
		console.error(error)
	} finally {
		styleSheet.seal()
	}
	res.send(html(htmlString, styleTags, req.hashManifest, helmetObject))
}

app.get('*', renderApp)

app.listen(PORT, (err) => {
	if (err) console.error(err)
	else console.log(`Server running in port ${PORT}`)
})
