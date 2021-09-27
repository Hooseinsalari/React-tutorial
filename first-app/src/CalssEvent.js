import React, { Component } from 'react';

class CalssEvent extends Component {
    // ClickHandler = () => {
    //     alert("Click Class")
    // }
    
    constructor(){
        super();
        this.state={
            text: ''
        }
    }

    changeHandler = event => {
        this.setState({
            text : event.target.value
        })
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.changeHandler}/>
                <br/>
                <button onClick={this.ClickHandler}>Class Event</button>
            </div>
        );
    }
}

export default CalssEvent;