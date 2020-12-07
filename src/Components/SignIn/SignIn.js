import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="card-container container-fluid">
            <form className="form-container">
                <h1 className="login-title">Login</h1>
                <input className="form-control" type="email" placeholder="Email" />
                <input className="form-control" type="password" placeholder="Password" />
                <input className="btn btn-primary" type="submit" value="Login" />
            </form>
        </div>
    );
};

export default SignIn;