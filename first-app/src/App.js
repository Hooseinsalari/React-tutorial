import React, { Component} from "react";

import UserC from "./UserC";
import UserF from "./UserF";

class App extends Component {
  render() {
    return(
      <div>
        <h1>h</h1>
        <UserC lastName="salari" />
        <UserF />

      </div>
    )
  }
}

export default App;