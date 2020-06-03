/* eslint-disable no-underscore-dangle */
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
import resolvers from './local-resolvers'

const link = createHttpLink({
	uri: 'https://swapi.graph.cool/',
	fetch,
})

export const createClient = options =>
	new ApolloClient({
		link,
		resolvers,
		...options,
	})
