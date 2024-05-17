import React, { useContext } from 'react';
import './NabBer.css'
import logo from './../../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBer = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <nav className='navber'>
            <img src={logo} alt="Logo" />
            <div className="nav-items">
                {/* <a href="/">Home</a> */}
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/signup">Sign Up</Link>
                <Link>{user?.email}</Link>
                {user ? <Link onClick={handleLogout} >LogOut</Link> : <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default NavBer;