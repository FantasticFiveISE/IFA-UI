import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../views/Login.css";
import Response from '../api/mock/resources/loginResponse'
import { useHistory } from "react-router-dom";




export default function Login() {

  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const history = useHistory(); // using the 

  // validation of the form + submit is pressed
  function handleSubmit(event) {
    if (!(user.length > 0
      && password.length > 0
      && Response.userName === user
      && Response.password === password)) {

      alert('Worng');
    } else {
      event.preventDefault();
      console.log("Sent !!!!!!!!!!!!!!!! ");

      //TODO: change acoording to the user 
      let path = user;
      history.push(path);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="user" bsSize="large">
          <ControlLabel>Username </ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}