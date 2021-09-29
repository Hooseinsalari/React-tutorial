import React, { Component} from "react";

import Login from "./Login";

class App extends Component {

  constructor(){
    super();
    this.state = {
      text: 'Hello'
    }
  }
  
  sayHi = () => {
    console.log(this.state.text)
  }
  
  render() {
    return(
      <div>
        <Login />
      </div>
    )
  }
}

export default App;