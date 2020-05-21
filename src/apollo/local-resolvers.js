import { FILM_LOGOS, FILM_POSTERS } from './context-images'

const resolvers = {
	Film: {
		logo: ({ id }) => FILM_LOGOS[id] || null,
		poster: ({ id }) => FILM_POSTERS[id] || null,
	},
}

export default resolvers
