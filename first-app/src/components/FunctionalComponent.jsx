import React, {useState, useEffect} from 'react';

const FunctionalComponent = () => {

    const [text, setText] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("component updating")
        document.title = `clicked ${count} times`
    },[count])
    return (
        <div>
             <div>
                    <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
                    {/* {console.log(this.state.text)} */}
                </div>
                <div>
                    <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
                    <p>{count}</p>
                </div>
        </div>
    );
};

export default FunctionalComponent;