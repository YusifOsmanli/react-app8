import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

const SiteRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default SiteRoot