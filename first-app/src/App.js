import React, { Component } from "react";
import Hi from "./Hi";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>Hossein</h1>
          <p>react tutorial</p>
          <Hi></Hi> {/* in baraye zamani hast ke mikhaim chizi to in tag benvisim */}
          <Hi />
        </div>
        <Hi />
      </>
    );
  }
}

export default App;
