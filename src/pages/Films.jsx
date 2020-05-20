import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useQuery } from '@apollo/react-hooks'
import { ALL_FILMS } from '../queries'

const Films = () => {
	const { data } = useQuery(ALL_FILMS)
	const episodes = data ? data?.allFilms : []

	return (
		<>
			<Helmet>
				<title>Star Wars Episodes</title>
			</Helmet>
			<h1>Here are the episodes</h1>
			{episodes.length > 0 && (
				<ul>
					{episodes.map(({ id, title }) => <li key={id}>{title}</li>)}
				</ul>
			)}
		</>
	)
}

export default Films
