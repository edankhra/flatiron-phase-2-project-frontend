import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Paintings from './components/Paintings';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/paintings">
          <Paintings />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
