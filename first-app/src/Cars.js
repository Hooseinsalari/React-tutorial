import React, { Component } from "react";
import HOComponent from "./HOComponent";

class Cars extends Component {
  render() {
    const {number, clickHandler} = this.props
    return (
      <div>
        <button onClick={clickHandler}>Plus One</button>
        <p>number of Cars: {number}</p>
      </div>
    );
  }
}

export default HOComponent(Cars, 5);
