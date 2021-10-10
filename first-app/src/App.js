import React, { Component } from 'react';

import { Route , Switch , Redirect } from 'react-router-dom';

import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import Docs from './component/Docs';
import Document from './component/Document';
import Products from './component/Products';
import Product from './component/Product';
import NoteFound from './component/NoteFound';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/Products/:id" component={Product} />
            <Route path="/Document" component={Document} />
            <Route path="/Docs/:writer?" component={Docs} />
            <Route path="/Products" render={(props) => <Products name="Hossein" {...props} />} />
            <Route path="/NoteFound" component={NoteFound} />
            <Redirect from="/crop" to="/Products" />
            <Route exact path="/" component={Homepage} />
            <Redirect to="/NoteFound" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;