import React from 'react';
import styles from "./Product.module.css";

const Product = (props) => {
    return (
        <div className={styles.container}>
           
            <h2>{props.title}</h2>
            <h2>{props.price}</h2>
            <h2>{props.quantity}</h2>
            <input type="text" onChange={props.changeHandle} value={props.title}/>
            <button onClick={props.inincreamentHandler}>+</button>
            <button onClick={props.decreaseHandler}>{props.quantity>1 ? <span>-</span> : <span>trash</span>}</button>
            <button onClick={props.removeHandler}>remove</button>
        </div>
    );
};

export default Product;