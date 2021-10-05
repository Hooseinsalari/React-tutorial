import React, { Component } from 'react';

class SecondChild extends Component {
    render() {
        return (
            <div>
                <p>total products: {this.props.number}</p>
            </div>
        );
    }
}

export default SecondChild;