import React, {useState, useEffect} from 'react';

const FunctionTimer = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let myTimer = setInterval(() => {
            console.log("Hello Hossein")
            setCount((prevState) => prevState + 1)
        }, 1000)
        return (() => {
            console.log("CWU")
            clearInterval(myTimer)
        })
    }, [])
    return (
        <div>
            start
        </div>
    );
};

export default FunctionTimer;