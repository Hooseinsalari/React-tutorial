import React, { Component } from 'react';

class CalssEvent extends Component {
    constructor(){
        super();
        this.state={
            text: '',
            option: 'option3'
        }
    }

    changeHandler = event => {
        this.setState({
            text : event.target.value,

        })
        // console.log(event.target.value)
    }

    selectHandler = event => {
        this.setState({
            option: event.target.value
        })
        // console.log(event.target.value)
    }

    SubmitHandler = event => {
        event.preventDefault();
        console.log(this.state.text)
        console.log(this.state.option)
    }

    render() {
        const {text, option} = this.state;
        return (
            <form>
                <input type="text" value={text} onChange={this.changeHandler}/>
                <br/>
                <br/>
                <select value={option} onChange={this.selectHandler}>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="option3">option3</option>
                    <option value="option4">option4</option>
                </select>
                <br/>
                <br/>
                <button type='submit' onClick={this.SubmitHandler}>Submit</button>
            </form>
        );
    }
}

export default CalssEvent;