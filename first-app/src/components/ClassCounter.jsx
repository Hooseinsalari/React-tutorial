import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            text : "",
            count : 0
        }
    }

    inputHandler = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    countHandler = (prevState) => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    componentDidMount() {
        document.title = `clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count ){
            console.log("component updating")
          document.title = `clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.text} onChange={this.inputHandler} />
                    {/* {console.log(this.state.text)} */}
                </div>
                <div>
                    <button onClick={this.countHandler}>+</button>
                    <p>{this.state.count}</p>
                </div>
            </div>
        );
    }
}

export default ClassCounter;