import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useQuery } from '@apollo/react-hooks'
import { Section } from '../styles'
import { ALL_EPISODES } from '../queries'
import TitleList from '../components/TitleList'

const Episodes = () => {
	const { data } = useQuery(ALL_EPISODES)
	const episodes = data ? data?.allFilms : []

	return (
		<>
			<Helmet>
				<title>Star Wars Episodes</title>
			</Helmet>
			<Section>
				<h1>Star Wars Episodes</h1>
				{episodes.length > 0 && <TitleList titles={episodes} />}
			</Section>
		</>
	)
}

export default Episodes
