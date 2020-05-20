import React from 'react'
import { hydrate } from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createClient } from './apollo'
import App from './App'

const apolloState = window?.__APOLLO_STATE__
const client = createClient({ cache: new InMemoryCache().restore(apolloState) })

const app = (
	<ApolloProvider client={client}>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</ApolloProvider>
)

hydrate(app, document.getElementById('root'))
