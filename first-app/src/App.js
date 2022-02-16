import React , {Component} from "react";
import axios from "axios";
import Post from "./Post";
import SendPost from "./SendPost";


class App extends Component {

  constructor() {
    super() 
    this.state = {
      data: []
    }

  }

  // componentDidMount() {
  //   const data = {
  //     title: "ali"
  //   }
  //   axios.post("https://jsonplaceholder.typicode.com/posts/", data)
  //     .then(response => console.log(response.data))
  //     .catch((error) => console.log(error))
  // }
  
  render(){
    return (
      <div>
        {
          // this.state.data.map((item) => <Post key={item.id} data={item} />)
          <SendPost />
        }
      </div>
    )
  }
}

export default App;