import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaShoppingCart } from 'react-icons/fa';
import logo from '../images/3697355.png'

const Navbar = () => {
    return (
        <>
            <nav className=" container mx-auto flex items-center justify-between ">
                <div>
                <NavLink className="logo-link" to="/"> <img src={logo} alt="logo" /> </NavLink>
                </div>
                <div>
                <ul className=" flex items-center font-bold">
                            <li className=" ml-6">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className=" ml-6">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className=" ml-6">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className=" ml-6">
                                <NavLink className="nav-link" to="/signUp">SignUp</NavLink>
                            </li>
                            <li className=" ml-6">
                                <NavLink className="nav-link inline-block px-4 py-2 rounded-full " id='cart-icon' to="/cart"><FaShoppingCart/></NavLink>
                            </li>
                        </ul>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar
