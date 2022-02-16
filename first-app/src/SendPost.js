import React, { Component } from "react";

import axios from "axios";

class SendPost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
    };
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount = () => {
    axios.all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/users"),
      axios.get("https://jsonplaceholder.typicode.com/albums")
    ]).then(axios.spread((posts, users, albums) => {
        console.log(posts.data)
        console.log(users.data)
        console.log(albums.data)
    }))
  };

  render() {
    return (
      <div>
        {/* <input type="text" name='title' value={this.state.title} onChange={this.inputHandler} />
                <input type="text" name='body' value={this.state.body} onChange={this.inputHandler} />
                <button onClick={this.postHandler}>post data</button> */}
      </div>
    );
  }
}

export default SendPost;
