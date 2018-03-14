import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/main' component={Main}/>
      </Switch>
      </BrowserRouter>
    );
  }
}
const Home = ()=>{
  return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
          LOGIN PAGE
        </p>
      </div>
  );
      
}
const Main = () => {
  return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
          MAIN PAGE
        </p>
      </div>
  );
      
}

export default App;
