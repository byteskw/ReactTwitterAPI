import React, { Component } from 'react';

/* Router */
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Main} from './Main';


import {Login} from './Login';

export class App extends Component {
  render() {

    
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
          <Route exact path='/main' component={MainPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const LoginPage = ()=>{

  return(
      <Login />
  ); 
}

const MainPage = () => {
  return(
      <Main />
  );
}

export default App;