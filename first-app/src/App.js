import React, { Component} from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  changeHandler = () => {
      this.setState({
          number: this.state.number + 1
      }, ()=>{console.log(`new number: ${this.state.number}`)})
      console.log(this.state.number)
  }

  render() {
    return (
      <>
        <h1>{this.state.number}</h1>
        <button onClick={this.changeHandler}>add</button>
      </>
    );
  }
}

export default App;
