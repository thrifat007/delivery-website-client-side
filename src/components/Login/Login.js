import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { loginWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || "/home"

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className='border border-circle'>
            <hr className="my-4" />

            <h6 className="card-title text-center fs-5">Login Using Google</h6>
            <Button className="btn btn-lg btn-google btn-block btn-danger text-uppercase" onClick={handleGoogleLogin} ><span className='text-white'>Using Google</span></Button>
            <hr className="my-4" />

        </div>
    );
};

export default Login;
