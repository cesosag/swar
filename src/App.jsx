import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle, Header, Main, Footer } from './styles'
import routes from './routes'
import { Image, Nav } from './components'
import swLogo from './assets/sw_logo.svg'
import { Home, Episodes, Episode } from './pages'

const App = () => (
	<>
		<GlobalStyle />
		<Header>
			<Image alt="SW Logo" src={swLogo} />
			<Nav />
		</Header>
		<Router component={Main}>
			<Home path={routes?.home?.path} />
			<Episodes path={routes?.episodes?.path} />
			<Episode path={routes?.episode?.path} />
		</Router>
		<Footer>
			<small>TM & © Lucasfilm Ltd. All Rights Reserved</small>
		</Footer>
	</>
)

export default App
