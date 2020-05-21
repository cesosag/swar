import React from 'react'
import { useParams } from '@reach/router'
import { useQuery } from '@apollo/react-hooks'
import { deslugify } from '../routes'
import { GET_EPISODE } from '../queries'

const Episode = () => {
	const { episodeTitle } = useParams()
	const { data } = useQuery(GET_EPISODE, {
		variables: { title: deslugify(episodeTitle) },
	})
	const { title, poster, openingCrawl } = data?.Film || {}

	return (
		<>
			<h1>
				{title && title}
			</h1>
			{poster && <img src={poster.src} alt={title} />}
			{openingCrawl && <p>{openingCrawl}</p>}
		</>
	)
}

export default Episode
