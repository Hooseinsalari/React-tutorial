import React, { Component } from 'react';

import { Route , Switch } from 'react-router-dom';

import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import Docs from './component/Docs';
import Document from './component/Document';
import Products from './component/Products';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/Document" component={Document} />
            <Route path="/Docs" component={Docs} />
            <Route path="/Products" render={(props) => <Products name="Hossein" {...props} />} />
              <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;