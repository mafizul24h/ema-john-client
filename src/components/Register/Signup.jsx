import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('');
        if (password !== confirm) {
            setError('Password & Confirm Password dose not match');
            return;
        } else if (password.length < 6) {
            setError('Please must be 6 digit');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset();
            }).catch(error => {
                setError(error.message);
                console.log(error);
            })
    }
    return (
        <div className='login-container'>
            <h2 className='login-title'>Please Sign Up</h2>
            <form onSubmit={handleRegister}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className='email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className='password' />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="confirm" className='confirm' />
                </div>
                <div className="form-control">
                    <button className='btn-login'>Sign Up</button>
                </div>
            </form>
            <div className='login-signup'>
                <p>Already have an account? <Link to={'/login'}>Login</Link></p>
            </div>
            <p className='error-text'>{error}</p>
        </div>
    );
};

export default Signup;