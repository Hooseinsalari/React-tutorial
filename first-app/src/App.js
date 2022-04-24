import React, { useState, useTransition } from 'react';
import { numbersCreator } from './numbers';
import NumbersList from './NumbersList';

const App = () => {

  const [value, setValue] = useState('')
  const [numbers, setNumbers] = useState(numbersCreator())
  const [isPending, startTransition] = useTransition()

  const changeHandler = (event) => {
    setValue(event.target.value)
    setNumbers(numbersCreator(event.target.value))
  }

  return (
    <div style={{textAlign: 'center'}}>
      <input type="text" value={value} onChange={changeHandler} />
      {
        isPending ? <h1>Loading...</h1> : <NumbersList numbers={numbers} />
      }
      
    </div>
  );
};

export default App;
