import React, { Component } from 'react';

class CalssEvent extends Component {
    // ClickHandler = () => {
    //     alert("Click Class")
    // }
    
    constructor(){
        super();
        this.state={
            paragragh: 'text1'
        }
        this.ClickHandler = this.ClickHandler.bind(this)
    }

    ClickHandler() {
        this.setState({
            paragragh:"text2"
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>Class Event</button>
                <h1>{this.state.paragragh}</h1>
            </div>
        );
    }
}

export default CalssEvent;