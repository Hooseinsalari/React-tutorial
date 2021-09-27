import React, { Component } from 'react';

class CalssEvent extends Component {
    ClickHandler = () => {
        alert("Click Class")
    }
    
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>Class Event</button>
            </div>
        );
    }
}

export default CalssEvent;