import React, {useState, useCallback} from 'react';
import ComA from './components/ComA';
import ComB from './components/ComB';

const App = () => {
  console.log("App rendered")

  const [valueA, setValueA] = useState("A"); 
  const [valueB, setValueB] = useState("B");

  const changeHandlerA = useCallback(() => {
    setValueA("AA")
  }, [valueA])

  const changeHandlerB = useCallback(() => {
    setValueB("BB")
  },[valueB])

  return (
    <div>
      <ComA value={valueA} changeHandler={changeHandlerA} />
      <ComB value={valueB} changeHandler={changeHandlerB} />
    </div>
  );
};

export default App;