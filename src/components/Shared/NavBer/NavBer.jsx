import React from 'react';
import './NabBer.css'
import logo from './../../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
const NavBer = () => {
    return (
        <nav className='navber'>
            <img src={logo} alt="Logo" />
            <div className="nav-items">
                {/* <a href="/">Home</a> */}
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default NavBer;