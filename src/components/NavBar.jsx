import React from 'react'
import './NavBar.css'
import logo from'./img/logo.png'

const NavBar = () => {
    return (
        <div>
            <ul className="navContainer">
                <img src={logo} alt="logo" className="logo"/>
                <h2 className="title">BALÚ</h2>
                    <li className="list">Inicio</li>
                    <li className="list">Servicios</li>
                    <li className="list">Acerca de </li>
                    <li className="list">Portafolio</li>
            </ul>
        </div>
    )
}
export default NavBar
