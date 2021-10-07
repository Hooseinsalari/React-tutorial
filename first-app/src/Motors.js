import React, { Component } from "react";
import HOComponent from "./HOComponent";

class Motors extends Component {
  render() {
    const {number, clickHandler} = this.props
    return (
      <div>
        <button onClick={clickHandler}>Plus One</button>
        <p>number of Motors: {number}</p>
      </div>
    );
  }
}

export default HOComponent(Motors, 1);
