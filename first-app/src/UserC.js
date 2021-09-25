import React, { Component } from 'react';

class UserC extends Component {
    constructor(){
        super();
        this.state = {
            name: 'hossein',
            age: 19
        }
    }
    render() {
        const {name, age} = this.state;
        const {lastName} = this.props
        return (
            <div>
                <h1>My name is {name} and {age} years old.</h1>
                <h1>{lastName}</h1>

            </div>
        );
    }
}

export default UserC;