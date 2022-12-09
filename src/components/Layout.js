import React from 'react'
import NavbarDefault from './NavbarDefault'

const Layout = ({children}) => {
  return (
    <div>
    <NavbarDefault/>
      {children}
    </div>
  )
}

export default Layout
