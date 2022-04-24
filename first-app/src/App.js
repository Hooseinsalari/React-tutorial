import React, { useState, useTransition } from 'react';
import { numbersCreator } from './numbers';

const App = () => {

  const [value, setValue] = useState('')
  const [numbers, setNumbers] = useState(numbersCreator())
  const [isPending, startTransition] = useTransition()

  const changeHandler = (event) => {
    setValue(event.target.value)
    startTransition(() => {
      setNumbers(numbersCreator(event.target.value))
    })
  }

  return (
    <div style={{textAlign: 'center'}}>
      <input type="text" value={value} onChange={changeHandler} />
      {
        isPending ? <h1>Loading...</h1> : numbers.map((item) => <p key={item}>{item}</p>)
      }
      
    </div>
  );
};

export default App;
