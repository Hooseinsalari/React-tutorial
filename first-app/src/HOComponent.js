import React, { Component } from "react";

const counter = (OldComponent, steps) => {
  class newComponent extends Component {
    constructor() {
      super();
      this.state = {
        number: 0,
      };
    }

    clickHandler = () => {
      this.setState((prevState) => ({
        number: prevState.number + steps,
      }));
    };nj

    render() {
        return <OldComponent number={this.state.number} clickHandler={this.clickHandler} />
    }
  }

  return newComponent;

};

export default counter;