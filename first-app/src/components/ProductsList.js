import React, { Component } from "react";
import Product from "./Product";

class ProductsList extends Component {
  render() {
    console.log("productLiat render")
    const {
        products,
        removeHandler,
        inincreamentHandler,
        decreaseHandler,
        changeHandle
    } = this.props;

    if (products.length <= 0) {
      return <div>your card is empty</div>;
    }
    return (
      <div>
        {products.map((product) => (
          <Product
            title={product.title}
            price={product.price}
            key={product.id}
            quantity={product.quantity}
            removeHandler={() => removeHandler(product.id)}
            inincreamentHandler={() =>
              inincreamentHandler(product.id)
            }
            decreaseHandler={() => decreaseHandler(product.id)}
            changeHandle={(event) => changeHandle(product.id, event)}
          />
        ))}
      </div>
    );
  }
}

export default ProductsList;
