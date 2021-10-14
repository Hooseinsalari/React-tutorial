import React, {useEffect} from 'react';
import useTitle from '../hooks/useTitle';

const Login = () => {

    // useEffect(() => {
    //     document.title = "Login"
    // }, [])

    useTitle("Login page (hook)")
    
    return (
        <div>
            <h1>Login page</h1>
        </div>
    );
};

export default Login;