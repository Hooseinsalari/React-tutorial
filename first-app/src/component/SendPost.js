import React, { Component } from 'react';
import axios from 'axios';

class SendPost extends Component {
    constructor(){
        super();
        this.state = {
            text: "",
            body: ""
        }
    }

    sendValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    sendPost = () => {
        const data = {
            text: this.state.text,
            body: this.state.body
        }
        axios.post("https://jsonplaceholder.typicode.com/posts", {data})
            .then(response => console.log(response))
        
    }
    
    render() {
        return (
            <div>
                <label>title: </label>
                <input type="text" name="text" value={this.state.text} onChange={this.sendValue} />
                <br />
                <br />
                <label>body: </label>
                <input type="text" name="body" value={this.state.body} onChange={this.sendValue} />
                <br />
                <br />
                <button onClick={this.sendPost} >send post</button>
            </div>
        );
    }
}

export default SendPost;