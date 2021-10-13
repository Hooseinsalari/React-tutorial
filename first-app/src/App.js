import React, {useState} from 'react';
import ComA from './components/ComA';

export const NameContext = React.createContext();
export const AgeContext = React.createContext();

const App = () => {
 
  const [name] = useState("Hossein")

  return (
    <div>
        <NameContext.Provider value={name}>
          <AgeContext.Provider value={19}>
            <ComA name={name} />
          </AgeContext.Provider>
        </NameContext.Provider> 
    </div>
  );
};

export default App;