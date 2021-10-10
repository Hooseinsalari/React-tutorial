import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/Document">Document</Link>
          </li>
          <li>
            <Link to="/Docs">Docs</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
