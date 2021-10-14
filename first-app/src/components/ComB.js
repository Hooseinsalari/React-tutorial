import React from 'react';

const ComB = (props) => {
    console.log("Component B rendered.")

    return (
        <div>
            ComponentB: {props.value}
            <button onClick={props.changeHandler}>Change</button>
        </div>
    );
};

export default React.memo(ComB);
