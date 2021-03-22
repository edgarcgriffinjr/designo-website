import React from 'react'

import Nav from './nav/nav'
import Footer from './nav/footer'

const Layout = (props) => {
    return (
        <>
            <Nav />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout;