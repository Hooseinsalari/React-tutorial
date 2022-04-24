import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

// ReactDom.render(<h1>Hossein</h1>, document.getElementById("root"))
// const header = <h1>Hossein</h1>
// ReactDom.render(header, document.getElementById("root"))

// ReactDom.render(<App />, document.getElementById("root"))

// v18
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);