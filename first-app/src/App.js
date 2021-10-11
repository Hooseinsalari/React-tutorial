import React, {useState} from 'react';
import Logger from './components/Logger';


const App = () => {
  
  const [isShow, setIsShow] = useState(true)
  
  return (
    <div>
        <button onClick={() => setIsShow(false)}>delete</button>
        {isShow && <Logger />}
    </div>
  );
};

export default App;