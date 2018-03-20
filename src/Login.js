import React, { Component } from 'react';
import './App.css';

/* material ui */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import CircularProgress from 'material-ui/CircularProgress';
import {Redirect} from 'react-router-dom';


//bootstrap & jquery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';

//router
import {Link} from 'react-router-dom';


export class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            completed: 0,
            load: false,
            accessToken: '',
            isLoggedIn: false,
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChangeName(event){
        this.setState({

            username : event.target.value, 
        });
    }
    handleChangePass(event){
        this.setState({
            password : event.target.value, 
        });
    }
  
    handleSubmit(){
      if(this.state.username=='john'&&this.state.password=='123456'){
        this.setState({
                isLoggedIn: true
              });
            }
    alert(this.state.username);
      alert(this.state.password);
      alert(localStorage.getItem('access'));
    }

    componentDidMount() {
      this.timer = setTimeout(() => this.progress(50), 100);
      fetch('https://test-mobile.neo-fusion.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'username': 'john',
            'password': '123456',
      })
      
    }).then((response) => response.json())
    .then((data) => {localStorage.setItem('access', JSON.stringify(data).substring(17,53))})
    .catch((error) => {
      console.error(error);
    });
    }
    componentWillMount(){
      clearTimeout(this.timer);
    } 

      
    progress(completed){
      if(completed > 100){
          this.setState({completed: 100, load: true});
      }else{
          this.setState({completed});
          const diff = Math.random() * 10;
          this.timer = setTimeout(() => this.progress(completed + diff), 100);
      }
  }

    render(){
        return(
         
            <MuiThemeProvider>
              {this.state.isLoggedIn ? <Redirect to={{pathname: '/main'}}/> : <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <a class="navbar-brand text-light" href="#">TWIT</a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item ">
                    <a class="nav-link text-light" href="#">Beranda</a>
                </li>
                </ul>
            </div>
            </nav>
        
            {this.state.load ? 
             <div className="App container"> <br />
             <form onSubmit={this.handleSubmit}>
             <div class="form-group">
                <input name="username" value={this.state.username} onChange={this.handleChangeName} className="form-control" type="text" placeholder="Insert Username.." required/><br /><br />
                <input name="password" value={this.state.password} onChange={this.handleChangePass} className="form-control" type="password" placeholder="Insert Password.." required/><br /><br />

                <input className="btn btn-outline-primary" type="submit" value="Sign In"/>
              </div>
             </form>
           </div>
           : 
            <center> 
              <CircularProgress size={100} thickness={5} className="circular-prog" value={this.state.completed} /> 
            </center>
           }
           </div>}
              
          </MuiThemeProvider>
        );
    }
}

export default Login;