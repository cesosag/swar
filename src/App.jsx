import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './global.styles'
import routes from './routes'
import { Main } from './layout'
import { Image, Nav } from './components'
import swLogo from './assets/sw_logo.svg'
import { Home, Episodes, Episode } from './pages'

const App = () => (
	<>
		<GlobalStyle />
		<header>
			<Image alt="SW Logo" src={swLogo} />
			<Nav />
		</header>
		<Router component={Main}>
			<Home path={routes?.home?.path} />
			<Episodes path={routes?.episodes?.path} />
			<Episode path={routes?.episode?.path} />
		</Router>
		<footer>
			TM & © Lucasfilm Ltd. All Rights Reserved
		</footer>
	</>
)

export default App
