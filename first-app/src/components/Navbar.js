import React from "react";

const Navbar = ({total}) => {
    console.log("navbar render")

  return (
    <div>
      <h1>{total}</h1>
    </div>
  );
};

export default Navbar;
