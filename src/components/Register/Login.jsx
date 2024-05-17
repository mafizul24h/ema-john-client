import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset();
                navigate(from, {replace: true});
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='login-container'>
            <h2 className='login-title'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className='email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? 'text' : "password"} name="password" id="password" className='password' />
                </div>
                <p onClick={() => setShow(!show)}><small className='password-toggle'>{show ? 'Hide Password' : 'Show Password'}</small></p>
                <div className="form-control">
                    <button className='btn-login'>Login</button>
                </div>
            </form>
            <div className='login-signup'>
                <p>New to Ema-john? <Link to={'/signup'}>Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;