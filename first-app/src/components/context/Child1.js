import React, {useContext} from 'react';
import Child2 from './Child2';
import { Message } from '../../App';


const Child1 = (props) => {
    const text = useContext(Message)
    return (
        <div>
            <h2>{text}</h2>
            <Child2 text={props.text} />

        </div>
    );
};

export default Child1;