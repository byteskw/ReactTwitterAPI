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


export class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
          formData: {
            email: '',
            password: '',
            completed: 0,
            load: false,
          },
          submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event){
      const {formData} = this.state;
      formData[event.target.name] = event.target.value;
      this.setState({formData});
    }
  
    handleSubmit(e){
      this.setState({submitted: true}, () =>{
        setTimeout(() => this.setState({submitted:false}), 3000);
      })
      this.setState(
        {
          [e.target.name]: e.target.value
        }
      )
    }

    componentDidMount() {
      this.timer = setTimeout(() => this.progress(50), 100);
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
        const {formData, submitted} = this.state;
        return(
            <MuiThemeProvider>
              <AppBar
                title="Login"
              />

            {this.state.load ? 
             <div className="App"> <br />
             <ValidatorForm onClick={this.handleSubmit} >
               <TextValidator
                 ref="email"
                 floatingLabelFixed = "email"
                 onChange={this.handleChange}
                 name="email"
                 value={formData.email}
                 validators={['required', 'isEmail']}
                 errorMessages={['this field is required','email is not valid']}
                 hintText = "Enter Your Email"
               /><br />
   
               <TextValidator
                 type="password"
                 ref="password"
                 onChange = {this.handleChange}
                 name="password"
                 value={formData.password}
                 floatingLabelFixed = "password"
                 validators={['required','minStringLength:5']}
                 errorMessages={['this field is required','password min 5 character']}
                 hintText = "Enter Your Password"
               /><br />
   
               <RaisedButton
                 type="submit"
                 label={(!submitted && 'Submit') || (submitted && 'your form is submmitted!')}
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