import React, { Component } from 'react';

class Child extends Component {
    
    
    render() {
        return (
            <div>
                <button onClick={this.props.clickHandler} >Plus One</button>
                <p>number of books: {this.props.number}</p>
            </div>
        );
    }
}

export default Child;