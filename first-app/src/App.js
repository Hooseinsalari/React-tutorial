import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";

class App extends Component {
  constructor() {
    super();
    console.log("constructor render")
    this.state = {
      products: [
        { title: "product1", price: "99 $", id: 1, quantity: 1 },
        { title: "product2", price: "80 $", id: 2, quantity: 1 },
        { title: "product3", price: "70 $", id: 3, quantity: 1 },
      ],
    };
  }
  removeHandler = (id) => {
    const filterProduct = this.state.products.filter(
      (product) => product.id !== id
    );
    this.setState({ products: filterProduct });
  };

  inincreamentHandler = (id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((product) => product.id === id);
    console.log(selectedItem)
    selectedItem.quantity++;
    this.setState({ products: products });
  };

  decreaseHandler = (id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((product) => product.id === id);
    selectedItem.quantity--;

    this.setState({ products: products.filter((pro) => pro.quantity > 0) });
  };

  changeHandle = (id, event) => {
    const products = [...this.state.products];
    const titleChanged = products.find((product) => product.id === id);
    titleChanged.title = event.target.value;
    this.setState({ products });
  };

  componentDidMount(){
    console.log("componentDidMount")
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentsDidUpdate")
    console.log(prevState)
  }

  
  render() {
    console.log("app rendered")
    return (
      <div>
        <Navbar
          total={this.state.products.filter((pro) => pro.quantity > 0).length}
        />
        <ProductsList
          products={this.state.products}
          removeHandler={this.removeHandler}
          inincreamentHandler={this.inincreamentHandler}
          decreaseHandler={this.decreaseHandler}
          changeHandle={this.changeHandle}
        />
      </div>
    );
  }
}

export default App;
