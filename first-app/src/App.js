import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import useFetch from "./hook/useFetch";

const App = () => {
  const {data, error, loading} = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <div>
      {loading && <h1>Loading...</h1>}      
      {error && <h1>{error}</h1>}
      {data && data.map((item) => <li>{item.name}</li>)}
    </div>
  );
};

export default App;
