import { FILM_LOGOS } from './context-images'

const resolvers = {
	Film: {
		logo: ({ id }) => FILM_LOGOS[id] || null,
	},
}

export default resolvers
