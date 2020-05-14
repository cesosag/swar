import React from 'react'
import { GlobalStyle } from './global.styles'
import swLogo from './assets/sw_logo.svg'

const App = () => (
	<>
		<GlobalStyle />
		<img alt="" src={swLogo} />
		<h1>Hello, Star Wars</h1>
	</>
)

export default App
