import React, { Component } from "react";
import axios from "axios";
import Post from "./component/Post";
import SendPost from "./component/SendPost";

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
    };
  }


  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => this.setState({
        postData: response.data
      }))
  }

 
  render() {
    const { postData } = this.state;
    return (
      <div>
        <SendPost />
        {/* <button onClick={this.getData}>get data</button>
        <button onClick={this.sendPost}>send post</button>
        <button onClick={this.deletePost}>delete post</button> */}
        <h1>Post:</h1>
        {postData.map((post) => <Post key={post.id} title={post.title} body={post.body} />)}
      </div>
    );
  }
}

export default App;
