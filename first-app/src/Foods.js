import React, { Component } from 'react';
import {v4} from "uuid";

class Foods extends Component {
    constructor(){
        super();
        this.state = {
            foods : [{id:1 ,name: 'pizza'}, {id:2 ,name: 'icecream'}, {id:3 ,name: 'egg'}, {id:4 ,name: 'pizza'}]
        }
    }
    
    render() {
        const {foods} = this.state
        return (
            <div>
                <h1>My favorite foods:</h1>
                {foods.map(food => <p key={v4()}>I love {food.name} - {v4()}</p>)}   
            </div>
        );
    }
}

export default Foods;