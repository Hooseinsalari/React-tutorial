import React, { useState  } from 'react';

const App = () => {

  const [value, setValue] = useState(0)

  const increaseNumber = () => {
    setValue((prevStete) => prevStete + 1)
    setValue((prevStete) => prevStete + 1)
  }

  console.log("render")
  return (
    <div style={{textAlign: 'center'}}>
      <button onClick={increaseNumber}>increace</button>
      <h1>{value}</h1>
    </div>
  );
};

export default App;
