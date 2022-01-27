import React from "react";
import Car from "./components/Car";

class App extends React.Component {
  render () {
    return (
      <>
        <Car color="blue" model="Benz" />
      </>
    )
  }
}


export default App;