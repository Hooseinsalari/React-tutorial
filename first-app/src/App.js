import React, { Suspense  } from 'react';
import Api from './Api';

const App = () => {

  return (
    <div style={{textAlign: 'center'}}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Api />
      </Suspense>
    </div>
  );
};

export default App;
