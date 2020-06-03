import React from 'react'
import PropTypes from 'prop-types'
import { TitlesContainer, TitleItem, Link } from './styles'
import { slugify } from '../../routes'

const TitleList = ({ titles }) => (
	<TitlesContainer>
		{titles.map(({ id, title, logo }) => (
			<TitleItem key={id}>
				<Link to={`/episodes/${slugify(title)}`}>
					<img src={logo} alt={title} />
				</Link>
			</TitleItem>
		))}
	</TitlesContainer>
)

TitleList.propTypes = {
	titles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default TitleList
