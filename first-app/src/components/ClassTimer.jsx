import React, { Component } from 'react';

class ClassTimer extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.myTimer = setInterval(() => {
            console.log("hello hossein")
            this.setState({count: this.state.count + 1})
        }, 1000)
    }

    componentWillUnmount() {
        console.log("CWU")
        clearInterval(this.myTimer)
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ClassTimer;