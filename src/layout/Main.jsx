import React, { forwardRef } from 'react'

const Main = forwardRef(({ children, ...props }, ref) => <main ref={ref} {...props}>{children}</main>)

export default Main
