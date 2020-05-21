import React, { forwardRef } from 'react'

const Main = forwardRef(({ children }, ref) => <main ref={ref}>{children}</main>)

export default Main
