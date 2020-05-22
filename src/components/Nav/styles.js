import styled from 'styled-components'
import { Link as RouterLink } from '@reach/router'

export const NavList = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 0;
`

export const NavItem = styled.li`
	display: block;
`

export const Link = styled(RouterLink)`
	color: inherit;
	text-decoration: none;
	text-transform: uppercase;
`
