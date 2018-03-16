import React, { Component } from 'react';
import './App.css';

/* material ui */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import LinearProgress from 'material-ui/LinearProgress';

//bootstrap & jquery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';

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
  
    handleSubmit(){
      this.setState({submitted: true}, () =>{
        setTimeout(() => this.setState({submitted:false}), 5000);
      })
    }

    componentDidMount() {
      this.timer = setTimeout(() => this.progress(35), 150);
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
          this.timer = setTimeout(() => this.progress(completed + diff), 150);
      }
  }

    render(){
        const {formData, submitted} = this.state;
        return(
            <MuiThemeProvider>
              <LinearProgress mode="determinate" value={this.state.completed} color="#006064"/>
              <AppBar
                title="Login"
              />

            {this.state.load ? 
             <div className="App"> <br />
             <ValidatorForm onSubmit={this.handleSubmit} instantValidate = {false} >
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
           : null}
          </MuiThemeProvider>
        );
    }
}

export default Login;