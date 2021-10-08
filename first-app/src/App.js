import React, { Component } from "react";


class App extends Component {

  constructor(){
    super();
    this.state = {
      postData: []
    }
  }

  getData = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json)=> {
      this.setState({
        postData: json
      })
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.getData}>get data</button>
        <h1>Post:</h1>
        {this.state.postData.map(post => <p key={post.id}> {post.title}</p>)}
      </div>
    );
  }
}

export default App;
