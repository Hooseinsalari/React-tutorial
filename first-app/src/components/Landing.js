import React, {useEffect} from 'react';
import useTitle from '../hooks/useTitle';

const Landing = () => {

    // useEffect(() => {
    //     document.title = "Landing"
    // }, [])

    useTitle("Landing page (hook)")

    return (
        <div>
            <h1>Landing page</h1>
        </div>
    );
};

export default Landing;