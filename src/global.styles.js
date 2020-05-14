import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	body {
		background-color: #000;
		color: #FFE81F;
		font-family: Roboto, sans-serif;
		margin: 0 auto;
	}

	html {
		font-size: 62.5%;
	}
`

export const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	padding: 1rem;
`
