import React, { Component } from 'react';

class CalssEvent extends Component {
    constructor(){
        super();
        this.state={
            text: '',
            option: 'option3'
        }
    }


    render() {
        return (
            <div>
                <button type='submit' onClick={this.props.sayHi}>Submdit</button>
            </div>
        );
    }
}

export default CalssEvent;