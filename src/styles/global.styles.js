import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import distantGalaxy from '../assets/fonts/SF_Distant_Galaxy.woff2'
import { colors, typography, vars } from './theme'

export const GlobalStyle = createGlobalStyle`
	${normalize()}

	@font-face {
		font-family: 'Distant Galaxy';
		src: url(${distantGalaxy}) format('woff2');
		font-weight: 700;
		font-style: normal;
	}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	body {
		background-color: #000000AA;
		color: ${colors.yellow[200]};
		font-family: ${typography.primaryFont};
		font-size: ${typography.typeScale.paragraph};
		height: 100%;
		margin: 0 auto;
		min-height: 100vh;
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

	h1, h2, h3, h4, h5, h6 {
		font-family: ${typography.secondaryFont};
	}
	h1 {
		font-size: ${typography.typeScale.h1};
	}
	h2 {
		font-size: ${typography.typeScale.h2};
	}
	h3 {
		font-size: ${typography.typeScale.h3};
	}
	h4 {
		font-size: ${typography.typeScale.h4};
	}
	h5 {
		font-size: ${typography.typeScale.h5};
	}
	h6 {
		font-size: ${typography.typeScale.h6};
	}

	html {
		background-attachment: fixed;
		background-image: url('https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg');
	}

	img {
		max-width: 100%;
		vertical-align: middle;
	}

	main {
		grid-area: main;
	}

	small {
		font-size: ${typography.typeScale.copyright};
	}

	#root {
		display: grid;
		grid-template-areas:
			'header'
			'main'
			'footer';
		justify-content: center;
	}
`

export const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${vars.maxWidth}px;
	padding: 1rem;
	width: 100vw;
`
