import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './global.styles'
import routes from './routes'
import { Image, Nav } from './components'
import swLogo from './assets/sw_logo.svg'
import { Home, Films } from './pages'

const App = () => (
	<>
		<GlobalStyle />
		<Image alt="SW Logo" src={swLogo} />
		<Nav />
		<Router>
			<Home path={routes.home} />
			<Films path={routes.films} />
		</Router>
	</>
)

export default App
