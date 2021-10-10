import React, { Component } from 'react';
import queryString from "query-string";

class Docs extends Component {

    showQuery = () => {
        // console.log(this.props.location.search)
        const result = queryString.parse(this.props.location.search)
        console.log(result)
    }

    render() {
        return (
            <div>
                <h1>Docs:</h1>
                <p>this is a Docs create with {this.props.match.params.writer}</p>
                <button onClick={this.showQuery}>show query</button>            
            </div>
        );
    }
}

export default Docs;