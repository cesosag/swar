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

export const GET_EPISODE = gql`
	query episode($title: String!) {
		Film(title: $title) {
			id
			title
			director
			openingCrawl
			poster @client
		}
	}
`
