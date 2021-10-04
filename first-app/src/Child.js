import React, { Component } from 'react';



class Child extends Component {

    showError = () => {
        const random = Math.random();
        if(random > 0.7){
            throw new Error("An error hossein")
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.showError}>Click</button>
            </div>
        );
    }
}

export default Child;