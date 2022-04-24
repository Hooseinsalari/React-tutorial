import React, { useDeferredValue } from 'react';

const NumbersList = ({numbers}) => {

    const defferredValue = useDeferredValue(numbers)

    return (
        <div>
            {
                defferredValue.map((item) => <p key={item}>{item}</p>)
            }
        </div>
    );
};

export default NumbersList;