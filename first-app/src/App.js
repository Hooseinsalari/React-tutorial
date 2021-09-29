import React, { Component} from "react";

import CalssEvent from "./CalssEvent";

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
        <CalssEvent sayHi={this.sayHi} />
      </div>
    )
  }
}

export default App;