import React, { Component } from 'react';
import './App.css';

/* material ui */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import CircularProgress from 'material-ui/CircularProgress';


//bootstrap & jquery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';

//router
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';


export class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            accessToken: '',
            username: '',
            password: '',
            completed: 0,
            load: false,
            isLog : false,
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChangeName(event){
        this.setState({
            username: event.target.value,
        });
    }
    handleChangePass(event){
      this.setState({
          password: event.target.value,
      });
  }
  
    handleSubmit(e){
      this.setState({submitted: true}, () =>{
        setTimeout(() => this.setState({submitted:false}), 3000);
      })
      alert(this.state.username);
      alert(this.state.password);
      alert(this.state.isLog);
      }
      

    componentDidMount() {
      this.timer = setTimeout(() => this.progress(50), 100);
      if(this.state.username=='john'&&this.state.password=='123456'){
        fetch('https://test-mobile.neo-fusion.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'username': 'john',
            'password': '123456',
      })
    })
    .then(response => {response.json().then(data=>{this.setState({accessToken: JSON.stringify(data).substring(17, 53),isLog: true})})})
    
        }else{
          this.setState({isLog: false});
        }
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
          {this.state.isLog? null : null}
            <MuiThemeProvider>
              <AppBar
                title="Login"
              />

            {this.state.load ? 
             <div className="App"> <br />
             <ValidatorForm onSubmit={this.handleSubmit} >
               <TextValidator
                 ref="username"
                 onChange={this.handleChangeName}
                 name="username"
                 value={this.state.username}
                 validators={['required']}
                 errorMessages={['this field is required','username is not valid']}
                 hintText = "Enter Your Username"
               /><br />
   
               <TextValidator
                 type="password"
                 ref="password"
                 onChange = {this.handleChangePass}
                 name="password"
                 value={this.state.password}
                 validators={['required','minStringLength:5']}
                 errorMessages={['this field is required','password min 5 character']}
                 hintText = "Enter Your Password"
               /><br />
                <RaisedButton
                 type="submit"
                 primary={true}
                 href='localhost:3000'
                 label="Sign In" />
               
             </ValidatorForm>
           </div>
           : 
            <center> 
              <CircularProgress size={100} thickness={5} className="circular-prog" value={this.state.completed} /> 
            </center>
           }
          </MuiThemeProvider>
        );
    }
}

export default Login;