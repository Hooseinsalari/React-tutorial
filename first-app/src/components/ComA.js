import React from 'react';

const ComA = (props) => {
    console.log("Component A rendered.")

    return (
        <div>
            ComponentA: {props.value}
            <button onClick={props.changeHandler}>Change</button>
        </div>
    );
};

export default React.memo(ComA);