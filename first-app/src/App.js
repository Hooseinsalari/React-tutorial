import React, { Component} from "react";

import CalssEvent from "./CalssEvent";
import FunctionEvent from "./FunctionEvent";

class App extends Component {
  render() {
    return(
      <div>
        <CalssEvent />
        <FunctionEvent />
      </div>
    )
  }
}

export default App;