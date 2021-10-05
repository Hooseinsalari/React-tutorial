import React, { Component } from "react";
import Child from "./Child";
import SecondChild from "./SecondChild";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  clickHandler = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };

  render() {
    return (
      <div>
        <Child clickHandler={this.clickHandler} number={this.state.number} />
        <SecondChild number={this.state.number} />
      </div>
    );
  }
}

export default App;
