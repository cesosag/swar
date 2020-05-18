import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
	${normalize()}

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
		overscroll-behavior: none;
	}

	figure {
		text-align: center;
	}

	html {
		font-size: 62.5%;
	}

	img {
		vertical-align: middle;
	}
`

export const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	padding: 1rem;
`
