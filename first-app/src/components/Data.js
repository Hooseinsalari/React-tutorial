import React , {useState} from 'react';

const Data = () => {

    const [data , setData] = useState([])
    const [number , setNumber] = useState(1)

    const itemHandler = () => {
        setNumber((prevNumber) => prevNumber +1 )
        
        setData([...data, `item${number}`])
    }

    return (
        <div>
            <button onClick={itemHandler}>Add Item</button>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default Data;