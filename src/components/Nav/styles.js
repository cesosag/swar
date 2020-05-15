import styled from 'styled-components'
import { Link as RouterLink } from '@reach/router'

export const NavList = styled.ul`
	display: flex;
	justify-content: space-around;
`

export const NavItem = styled.li`
	display: block;
`

export const Link = styled(RouterLink)`
	color: inherit;
	font-size: 24px;
	text-decoration: none;
	text-transform: uppercase;
`
