import React, { forwardRef } from 'react'
import { GlobalStyle, Wrapper } from './global.styles'

const dynamicElement = (Tag, hasWrapper = false) => forwardRef(({ children, ...props }, ref) => {
	const content = hasWrapper ? <Wrapper>{children}</Wrapper> : children
	return <Tag ref={ref} {...props}>{content}</Tag>
})

const Main = dynamicElement('main')
const Header = dynamicElement('header', true)
const Footer = dynamicElement('footer', true)
const Section = dynamicElement('section', true)

export { GlobalStyle, Header, Main, Section, Footer }
