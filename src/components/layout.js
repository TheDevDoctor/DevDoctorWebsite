import React from 'react'
import SEO from './seo'



import Header from './header'
import Footer from './footer'

import '../styles/layout.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ seo, children }) => {
    return (
        <>
            <SEO seo={seo} ></SEO>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout