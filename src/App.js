import React, { Component } from 'react';
import './App.css';

/* material ui */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {TextValidator, ValidatorForm } from 'react-material-ui-form-validator';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      formData: {
        email: '',
        password: '',
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

  render() {
    const {formData, submitted} = this.state;
    
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar
            title="Login"
          />
          
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
       </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
