import React from 'react'
import { NavList, Link, NavItem } from './styles'
import routes from '../../routes'

const Nav = () => (
	<nav>
		<NavList>
			{Object.values(routes).map(({ path, name, child }) => (
				!child && <NavItem key={name}><Link to={path}>{name}</Link></NavItem>
			))}
		</NavList>
	</nav>
)

export default Nav
