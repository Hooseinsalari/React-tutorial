import React, {useState, useMemo} from 'react';

const App = () => {
  const [isShown, setIsShown] = useState(true);
  const [number, setNumber ] = useState(0); 

  const slow = useMemo(() => {
    for(let i=0; i<100000000; i++) {}
    return isShown;
  },[isShown])

  const shownHandler = () => {
    setIsShown(!isShown)
  }

  const numberHandler = () => {
    setNumber((prevnumber) => prevnumber + 1)
  }

  return (
    <div>
      <button onClick={shownHandler}>Shown</button>
      <h1>{slow? "show" : "hide"}</h1>
      <h2>{console.log(isShown)}</h2>
      <br />
      <button onClick={numberHandler}>+</button>
      <h1>{number}</h1>
    </div>
  );
};

export default App;