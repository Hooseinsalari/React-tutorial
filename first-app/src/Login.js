import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            isUserLogin: true
        }
    }
    
    render() {
        return(
            <div>
                {/* {(this.state.isUserLogin ? <h1>welcome</h1> : <h1>Login</h1>)} */}
                {(this.state.isUserLogin && <h1>welcome</h1>)}
            </div>
        )
    }
}

export default Login;