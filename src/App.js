import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
=======

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
>>>>>>> a98cc7a37f4f793e8c74901d1bdc4db27134ed94
    );
  }
}

<<<<<<< HEAD
export default App;
=======
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
>>>>>>> a98cc7a37f4f793e8c74901d1bdc4db27134ed94
