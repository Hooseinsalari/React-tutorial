import React from 'react';
import ReactDom from "react-dom";

const Child = () => {

    return ReactDom.createPortal (
        <div>
            <h1>Hossein</h1>
        </div>,
        document.getElementById("child-root")
    );

}

export default Child;