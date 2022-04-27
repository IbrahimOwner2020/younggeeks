import React, { FC } from 'react'
import Footer from './Footer'
import Nav from './Nav'

const Layout: FC<{ children: any }> = ({ children }) => {
    return (
        <div className='z-0'>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout