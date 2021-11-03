import React, { Component } from 'react';
import Product from './Product';

class ProductsList extends Component {
    constructor(){
        super();
        this.state = {
            products : [
                {title:"product1", price: "99 $", id:1, quantity: 1},
                {title:"product2", price: "80 $", id:2, quantity: 1},
                {title:"product3", price: "70 $", id:3, quantity: 1},
            ]}   
        }

    removeHandler = (id) => {
        const filterProduct = this.state.products.filter((product) => product.id !== id)
        this.setState({products: filterProduct})
    }

    inincreamentHandler = (id) => {
        const products = [...this.state.products]
        const selectedItem = products.find((product) => product.id === id)
        selectedItem.quantity++;
        this.setState({products: products})
    }

    decreaseHandler = (id) => {
        const products = [...this.state.products]
        const selectedItem = products.find((product) => product.id === id)
        selectedItem.quantity--;
        
        this.setState({products: products.filter((pro) => pro.quantity > 0)})
    }

    changeHandle = (id, event) => {
        const products = [...this.state.products]
        const titleChanged = products.find((product) => product.id === id);
        titleChanged.title = event.target.value;
        this.setState({products})
    }
    render() {
        if(this.state.products.length <= 0) {
            return <div>your card is empty</div>
        }
        return (
            <div>
              {
                this.state.products.map((product) => <Product
                title={product.title}
                price={product.price}
                key={product.id}
                quantity={product.quantity}
                removeHandler={() => this.removeHandler(product.id)}
                inincreamentHandler={() => this.inincreamentHandler(product.id)}
                decreaseHandler={() => this.decreaseHandler(product.id)}
                changeHandle={(event) => this.changeHandle(product.id, event)}
                />)
                
              }  
            </div>
        );
    }
}

export default ProductsList;