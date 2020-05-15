import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ alt, src }) => (
	<figure>
		<img src={src} alt={alt} />
	</figure>
)

Image.propTypes = {
	alt: PropTypes.string,
	src: PropTypes.string.isRequired,
}

Image.defaultProps = {
	alt: '',
}

export default Image
