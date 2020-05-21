import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './global.styles'
import routes from './routes'
import { Image, Nav } from './components'
import swLogo from './assets/sw_logo.svg'
import { Home, Episodes, Episode } from './pages'

const App = () => (
	<>
		<GlobalStyle />
		<Image alt="SW Logo" src={swLogo} />
		<Nav />
		<Router>
			<Home path={routes?.home?.path} />
			<Episodes path={routes?.episodes?.path} />
			<Episode path={routes?.episode?.path} />
		</Router>
	</>
)

export default App
