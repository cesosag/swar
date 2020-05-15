import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './global.styles'
import { ALIASES } from './routes'
import { Image, Nav } from './components'
import swLogo from './assets/sw_logo.svg'
import { Home, Films } from './pages'

const App = () => (
	<>
		<GlobalStyle />
		<Image alt="SW Logo" src={swLogo} />
		<Nav />
		<Router>
			<Home path={ALIASES.home} />
			<Films path={ALIASES.films} />
		</Router>
	</>
)

export default App
