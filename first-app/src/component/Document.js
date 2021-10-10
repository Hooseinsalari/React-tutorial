import React, { Component } from 'react';

class Document extends Component {
    
    goHomepage = () => {
        // this.props.history.push("/")
        this.props.history.replace("/")
    }
    
    render() {
        return (
            <div>
                <h1>Document</h1>
                <button onClick={this.goHomepage}>go Homepage</button>                
            </div>
        );
    }
}

export default Document;