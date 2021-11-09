import React, { useContext } from 'react';
import { Message } from '../../App';
import Child1 from './Child1';

const Parent = (props) => {
    const text = useContext(Message)
    return (
        <div>
            <h1>{text}</h1>
            {/* <Child1 text={props.text} /> */}
        </div>
    );
};

export default Parent;