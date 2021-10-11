import React, { useEffect , useState} from 'react';

const Logger = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(() => {
        console.log(num1)
    },[])

    return (
        <div>
            <h1>{num1}</h1>
            <button onClick={() => setNum1((perevNum1) => perevNum1 + 1)}>UP</button>
            <br />
            <button onClick={() => setNum2((perevNum2) => perevNum2 + 1)}>UP</button>
            <h1>{num2}</h1>
        </div>
    );
};

export default Logger;