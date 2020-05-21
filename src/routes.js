export const slugify = (url) => url.replace(/\s/g, '-')
export const deslugify = (slug) => slug.replace(/-/g, ' ')

const routes = {
	home: {
		path: '/',
		name: 'Home',
	},
	episode: {
		path: '/episodes/:episodeTitle',
		name: 'episode',
		child: true,
	},
	episodes: {
		path: '/episodes',
		name: 'episodes',
	},
}

export default routes
