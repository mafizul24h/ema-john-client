import React from 'react';
import './NabBer.css'
import logo from './../../../assets/images/Logo.svg'
const NavBer = () => {
    return (
        <nav className='navber'>
            <img src={logo} alt="Logo" />
            <div className="nav-items">
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default NavBer;