import React from 'react'
import { useParams } from '@reach/router'
import { deslugify } from '../routes'

const Episode = () => {
	const { episodeTitle } = useParams()
	return (
		<h1>
			{deslugify(episodeTitle)}
		</h1>
	)
}

export default Episode
