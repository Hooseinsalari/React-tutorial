import React, { Component } from 'react';
import Child from './Child';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;