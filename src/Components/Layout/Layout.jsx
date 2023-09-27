import React, { Component } from 'react'
import Nav from '../NavBar/Nav'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default class Layout extends Component {
    render() {
        return <>
            <Nav />
            <Outlet />
            <Footer />


        </>
    }
}
