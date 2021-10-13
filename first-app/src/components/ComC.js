import React , {useContext} from 'react';
import { NameContext, AgeContext } from '../App';

const ComC = () => {

    const name = useContext(NameContext);
    const age = useContext(AgeContext);
    return (
        <div>
            <h1>{name} , {age}</h1>
        </div>
    );
};

export default ComC;