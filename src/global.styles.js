import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const cssVars = {
	maxWidth: 1200,
}

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

	footer {
		grid-area: footer;
	}

	header {
		grid-area: header;
	}

	html {
		font-size: 62.5%;
	}

	img {
		max-width: 100%;
		vertical-align: middle;
	}

	main {
		grid-area: main;
	}

	#root {
		display: grid;
		grid-template-areas:
			'header'
			'main'
			'footer';
		margin: 0 auto;
		max-width: ${cssVars.maxWidth}px;
	}
`

export const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${cssVars.maxWidth}px;
	padding: 1rem;
`
