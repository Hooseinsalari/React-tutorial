import React from 'react';

const FunctionEvent = () => {
    const ClickHandler = () => {
        alert("Click function")
    }
    
    return (
        <div>
            <button onClick={ClickHandler}>Click Function</button>
        </div>
    );
};

export default FunctionEvent;