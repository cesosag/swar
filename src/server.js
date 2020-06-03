/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { getDataFromTree } from '@apollo/react-ssr'
import { ApolloProvider } from '@apollo/react-common'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HelmetProvider } from 'react-helmet-async'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { ServerLocation } from '@reach/router'
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import helmet from 'helmet'
import mime from 'mime-types'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import getManifest from './getManifest'

import { createClient } from './apollo'
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
	app.use((req, res, next) => {
		if (!req.hashManifest) req.hashManifest = getManifest()
		next()
	})
	app.get(/\.(js|css|html|svg)$/, (req, res, next) => {
		const ext = path.extname(req.url)
		const compressionMethod = req.header('Accept-Encoding').includes('br')
			? 'br'
			: 'gzip'
		const compressionExt =
			compressionMethod === 'gzip' ? 'gz' : compressionMethod
		req.url = `${req.url}.${compressionExt}`
		res.set('Content-Encoding', compressionMethod)
		res.set('Content-Type', mime.contentType(ext))
		next()
	})
	app.use(express.static(path.resolve(__dirname, '..', 'dist')))
	app.use(helmet())
	app.use(helmet.permittedCrossDomainPolicies())
	app.disable('x-powered-by')
}

const renderApp = (req, res) => {
	const client = createClient({ ssrMode: true, cache: new InMemoryCache() })
	const helmetContext = {}
	const styleSheet = new ServerStyleSheet()
	const AppSSR = (
		<ApolloProvider client={client}>
			<HelmetProvider context={helmetContext}>
				<StyleSheetManager sheet={styleSheet.instance}>
					<ServerLocation url={req.url}>
						<App />
					</ServerLocation>
				</StyleSheetManager>
			</HelmetProvider>
		</ApolloProvider>
	)
	getDataFromTree(AppSSR)
		.then(() => {
			let helmetObject
			let htmlString
			let styleTags
			try {
				htmlString = renderToString(AppSSR)
				helmetObject = helmetContext.helmet
				styleTags = styleSheet.getStyleTags()
			} catch (error) {
				console.error(error)
			} finally {
				styleSheet.seal()
			}
			const initialState = client.extract()
			res.status(200)
			res.send(
				html(
					htmlString,
					styleTags,
					req.hashManifest,
					helmetObject,
					initialState
				)
			)
			res.end()
		})
		.catch(err => console.error(err))
}
app.use(renderApp)

app.listen(PORT, err => {
	if (err) console.error(err)
	else console.log(`Server running in port ${PORT}`)
})
