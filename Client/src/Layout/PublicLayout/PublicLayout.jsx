import React from 'react'
import Nav from '../../Default/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'
import Carousel from '../Home/Carousel'

function PublicLayout() {
    return (
        <div>
            <Nav />
          
            <Outlet />

        </div>
    )
}

export default PublicLayout