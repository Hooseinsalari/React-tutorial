import React, { Component } from 'react';

class Child extends Component {
    constructor(){
        super();
        this.input = React.createRef();  //input ke aval neveshtam yek esme mitone har chizi bashe vali mortabet
    }

    showRef = () => {
        console.log(this.input.current.value)
    }

    componentDidMount(){
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <button onClick={this.showRef}>Show</button>
                <input type="text" ref={this.input} />
            </div>
        );
    }
}

export default Child;