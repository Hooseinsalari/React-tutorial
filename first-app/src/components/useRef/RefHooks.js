import React, { useState, useRef, useEffect } from 'react';

const RefHooks = () => {
    const [text, setText] = useState("");
    const previousInput = useRef();

    useEffect(() =>{
        previousInput.current = text
    },[text])

    return (
        <div>
            <input ref={previousInput} type="text" value={text} onChange={(event) => setText(event.target.value)} />
            <p>my state is {text} - prev state is {previousInput.current} </p>
            
        </div>
    );
};

export default RefHooks;