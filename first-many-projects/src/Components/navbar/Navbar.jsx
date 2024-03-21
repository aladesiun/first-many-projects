import React from "react";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

const Navbar = () => {
    return (
        <div className={'gpt3-navbar'}>
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links__logo">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </div>
    )
}


export default Navbar
