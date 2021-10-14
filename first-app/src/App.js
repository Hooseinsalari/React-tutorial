import React, { useState } from 'react';
import Landing from './components/Landing';
import Login from './components/Login';

const App = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>toggle</button>    
      {toggle ? <Landing /> : <Login />}
    </div>
  );
};

export default App;