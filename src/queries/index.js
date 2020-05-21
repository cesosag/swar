import gql from 'graphql-tag'

export const ALL_EPISODES = gql`
	{
		allFilms(orderBy: episodeId_ASC) {
			id
			title
			logo @client
		}
	}
`
