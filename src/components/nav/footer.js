import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Instagram } from '../../assets/shared/desktop/icon-instagram.svg'
import { ReactComponent as Facebook } from '../../assets/shared/desktop/icon-facebook.svg'
import { ReactComponent as Pinterest } from '../../assets/shared/desktop/icon-pinterest.svg'
import { ReactComponent as Youtube } from '../../assets/shared/desktop/icon-youtube.svg'
import { ReactComponent as Twitter } from '../../assets/shared/desktop/icon-twitter.svg'

import logo from '../../assets/shared/desktop/logo-light.png';

const Footer = () => {
    return ( 
        <footer className = 'footer'>
            <div className="footer-container">
                <div className = 'footer-upper'>
                    <div className="footer-upper-logo">
                        <img src={logo} alt="logo" height="30px"/>
                    </div>

                    <ul className="footer-upper-links">
                        <li> <Link to ="/about"> Our Company </Link></li>
                        <li> <Link to ="/locations"> Locations </Link></li>
                        <li> <Link to ="/contact"> Contacts </Link></li>
                    </ul>
                </div>

                <div className = 'footer-lower'>
                    <div className="footer-lower-location">
                        <p> Design Central Office </p>
                        <p> 3886 Wellington Street </p>
                        <p> Toronto, Ontario M9C 3J5 </p>
                    </div>

                    <div className="footer-lower-contact">
                        <p> Contact Us (Central Office)</p>
                        <p> P: +1 253-863-8967 </p>
                        <p> M: contact@designo.co </p>
                    </div>

                    <ul className="footer-lower-social">
                        <li> <Facebook /> </li>
                        <li> <Youtube /> </li>
                        <li> <Twitter /> </li>
                        <li> <Pinterest /> </li>
                        <li> <Instagram /> </li>
                    </ul>

                </div>
            </div>
        </footer>
     );
}
 
export default Footer;