import styled from 'styled-components'
import { Link as RouterLink } from '@reach/router'

export const TitlesContainer = styled.ul`
	display: grid;
	gap: 1em;
	grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
	margin: 2em auto;
	padding: 0;
`

export const TitleItem = styled.li`
	display: block;

	&:last-of-type {
		grid-column: span 2;
	}
`

export const Link = styled(RouterLink)`
	display: block;
`
