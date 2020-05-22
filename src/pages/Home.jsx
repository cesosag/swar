import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Section } from '../styles'

const Home = () => (
	<>
		<Helmet>
			<title>Star Wars React App</title>
		</Helmet>
		<Section>
			<h1>Hello, Star Wars</h1>
		</Section>
	</>
)

export default Home
