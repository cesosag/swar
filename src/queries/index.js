import gql from 'graphql-tag'

export const ALL_FILMS = gql`
	{
		allFilms(orderBy: episodeId_ASC) {
			id
			title
			logo @client
		}
	}
`
