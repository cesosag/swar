import React from 'react'
import { GlobalStyle } from './global.styles'
import Image from './components/Image'
import swLogo from './assets/sw_logo.svg'

const App = () => (
	<>
		<GlobalStyle />
		<Image alt="SW Logo" src={swLogo} />
		<h1>Hello, Star Wars</h1>
	</>
)

export default App
