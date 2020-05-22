import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from '@reach/router'
import { useQuery } from '@apollo/react-hooks'
import { Section } from '../styles'
import { deslugify } from '../routes'
import { GET_EPISODE } from '../queries'

const Episode = () => {
	const { episodeTitle } = useParams()
	const title = deslugify(episodeTitle)
	const { data } = useQuery(GET_EPISODE, {
		variables: { title },
	})
	const { poster, openingCrawl } = data?.Film || {}

	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Section>
				<h1>{title}</h1>
				{poster && <img src={poster.src} alt={title} />}
				{openingCrawl && <p>{openingCrawl}</p>}
			</Section>
		</>
	)
}

export default Episode
