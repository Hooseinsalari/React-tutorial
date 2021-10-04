import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: false,
            errorMasseage: ''
        }
    }

    componentDidCatch(error, info){
        this.setState({
            error: true,
            errorMasseage: error
        })
    }
    
    render() {
            if(this.state.error){
                return <p>{this.state.errorMasseage}</p>
            }else{
                return this.props.children
            }
    }
}

export default ErrorBoundary;