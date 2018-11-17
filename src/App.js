import React, { Component } from 'react';
// For Routes
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import { ROUTES } from './common/utils/'
// Pages
import SignUp from './SignUp'
import LogIn from './LogIn'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.SIGNUP} component={SignUp} /> 
        <Route exact path={ROUTES.LOGIN} component={LogIn} />
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
