import React from "react";
import styles from "./Product.module.css";

const Product = (props) => {
  const {
    title,
    price,
    quantity,
    changeHandle,
    inincreamentHandler,
    decreaseHandler,
    removeHandler,
   } = props;

   console.log("product render")

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <h2>{price}</h2>
      <h2>{quantity}</h2>
      <input type="text" onChange={changeHandle} value={title} />
      <button onClick={inincreamentHandler}>+</button>
      <button onClick={decreaseHandler}>
        {quantity > 1 ? <span>-</span> : <span>trash</span>}
      </button>
      <button onClick={removeHandler}>remove</button>
    </div>
  );
};

export default Product;
