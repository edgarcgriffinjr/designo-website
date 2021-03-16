import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/shared/desktop/logo-dark.png';

const Nav = () => {
    const [menu, setMenu] = useState(false)

    const showMenu = () => setMenu(!menu)

    return ( 
        <header className = 'header'>
            <div className="logo">
                <Link to = '/'> <img src={logo} alt="logo" height="30px"/> </Link>
            </div>

            <ul className="header-links">
                <li> <Link to = "/about"> Our Company </Link></li>
                <li> <Link to = "/locations"> Locations </Link></li>
                <li> <Link to = "/contacts"> Contacts </Link></li>
            </ul>

            <div className="header-burger" onClick = { showMenu }>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
            </div>

            <ul className = { menu ? 'menu active' : 'menu' }>
                <li> <Link to = "/about"> Our Company </Link></li>
                <li> <Link to = "/locations"> Locations </Link></li>
                <li> <Link to ="/contacts"> Contacts </Link></li>
            </ul>
        </header>
     );
}
 
export default Nav;