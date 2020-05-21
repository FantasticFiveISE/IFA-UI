import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../views/Login.css";

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {user:'', password:''};
    // this.userChange = this.userChange.bind(this);
    // this.submitUser = this.submitUser.bind(this);
  }
  

  submitUser = (event) =>{
    alert(this.state.user); 
    event.preventDefault();

  }

  //updates the state values 
  userChange = (event) =>{
    this.setState({
        [event.target.name]:event.target.value
    });
  }


  render(){
    return (
      <div className="Login">
        <form onSubmit={this.submitUser}>

          <FormGroup controlId="user" bsSize="large">
            <ControlLabel>Username </ControlLabel>
            <FormControl
              name="user"
              value={this.state.user}
              onChange={this.userChange}
              type="text" required
              placeholder="Enter your user name please"
            />
          </FormGroup>

          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              name="password"
              value={this.state.password}
              onChange={this.userChange}
              placeholder="Enter your password please"
              type="password" required
            />
          </FormGroup>

          <Button block bsSize="large"  type="submit">
            Login
          </Button>

        </form>
      </div>
    );
  }
 
}