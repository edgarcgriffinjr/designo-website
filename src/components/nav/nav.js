import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/shared/desktop/logo-dark.png';
import { ReactComponent as Hamburger } from '../../assets/shared/mobile/icon-hamburger.svg'
import { ReactComponent as Close } from '../../assets/shared/mobile/icon-close.svg'

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
                <li> <Link to = "/contact"> Contacts </Link></li>
            </ul>

            <div className="header-burger" onClick = { showMenu }>
                { menu ? <Close /> : <Hamburger /> }   
            </div>

            <ul className = { menu ? 'menu active' : 'menu' }>
                <li> <Link to = "/about"> Our Company </Link></li>
                <li> <Link to = "/locations"> Locations </Link></li>
                <li> <Link to ="/contact"> Contacts </Link></li>
            </ul>
        </header>
     );
}
 
export default Nav;