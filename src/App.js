import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {MainPage} from './Main';

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

        <p className="App-intro">
          LOGIN PAGE
        </p>

  );
      
}
const Main = () => {
  return(
        <div>
          <MainPage />
        </div>
  );
      
}

export default App;
