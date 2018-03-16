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


//  
import AuthService from './AuthService';


export class Login extends Component{
    constructor(){
        super();
        this.state = {
          formData: {
            completed: 0,
            load: false,
          },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Auth = new AuthService();
      }
    handleChange(event){
      this.setState(
        {
          [event.target.name]: event.target.value
        }
      )
    }
  
    handleSubmit(e){
      e.preventDefault();

      this.Auth.login(this.state.username, this.state.password)
      .then(res =>{
          this.props.history.replace('/main');
      })
      .catch(err => {
        alert(err);
      })

    }

    componentDidMount() {
      this.timer = setTimeout(() => this.progress(50), 100);
    }
    componentWillMount(){
      if(this.Auth.loggedIn())
       this.props.history.replace('/main');

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
        const {formData, submitted} = this.state;
        return(
            <MuiThemeProvider>
              <AppBar
                title="Login"
              />

            {this.state.load ? 
             <div className="App"> <br />
             <ValidatorForm onSubmit={this.handleSubmit}>
               <TextValidator
                 ref="username"
                 floatingLabelFixed = "username"
                 onChange={this.handleChange}
                 name="username"
                 hintText = "Enter Your username"
               /><br />
   
               <TextValidator
                 type="password"
                 ref="password"
                 onChange = {this.handleChange}
                 name="password"
                 floatingLabelFixed = "password"
                 hintText = "Enter Your Password"
               /><br />
   
               <RaisedButton
                 type="submit"
                 label="Log In"
                 primary={true}
                />
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