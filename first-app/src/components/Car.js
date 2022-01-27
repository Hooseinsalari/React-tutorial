import React, { Component } from 'react';

class Car extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
        
    }
    
    addHandler = () => {
        this.setState((prevState) => ({
            number: prevState.number + 1
        }))
    }

    render() {
        const {color, model} = this.props
        const {number} = this.state
        return (
            <div>
                {color}
                number:{number}
                <button onClick={this.addHandler}>add</button>
            </div>
        );
    }
}

export default Car;