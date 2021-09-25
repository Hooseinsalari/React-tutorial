import React, { Component} from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  addOne = () => {
      // this.setState({
      //     number: this.state.number + 1
      // }, ()=>{console.log(`new number: ${this.state.number}`)})
      // console.log(this.state.number)

      this.setState((prevState) => ({
        number: prevState.number +1
      }))
  }

  addThree = () => {
    this.addOne();
    this.addOne();
    this.addOne();
    
  }

  render() {
    return (
      <>
        <h1>{this.state.number}</h1>
        <button onClick={this.addThree}>add3</button>
      </>
    );
  }
}

export default App;
