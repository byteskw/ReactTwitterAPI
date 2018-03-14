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
<<<<<<< HEAD

        <p className="App-intro">
          LOGIN PAGE
        </p>

  );
      
=======
      <Login />
  ); 
>>>>>>> 4d5d4f825458d1a31f0677618205bd759befa9d6
}

const MainPage = () => {
  return(
<<<<<<< HEAD
        <div>
          <MainPage />
        </div>
=======
      <Main />
>>>>>>> 4d5d4f825458d1a31f0677618205bd759befa9d6
  );
}

export default App;