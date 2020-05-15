import React from 'react'
import { NavList, Link, NavItem } from './styles'
import { ALIASES } from '../../routes'

const Nav = () => (
	<nav>
		<NavList>
			{Object.entries(ALIASES).map((alias) => <NavItem key={alias[0]}><Link to={alias[1]}>{alias[0]}</Link></NavItem>)}
		</NavList>
	</nav>
)

export default Nav
