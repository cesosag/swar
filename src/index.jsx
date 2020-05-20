import React from 'react'
import { hydrate } from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

const app = (
	<HelmetProvider>
		<App />
	</HelmetProvider>
)

hydrate(app, document.getElementById('root'))
