import React from 'react';
import Logo from '../../assets/img/logo-principal-image-translator.png'
import './Menu.css'

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="logo-principal" />
            </a>
        </nav>
    );
}

export default Menu;