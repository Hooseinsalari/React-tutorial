import React , {useState} from 'react';

const Counter = () => {

    const [number , setNumber] = useState(0);

    const clickHandler = () => {
        setNumber( (prevNumber) => prevNumber + 1 )
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={clickHandler}>UP</button>
        </div>
    );
};

export default Counter;