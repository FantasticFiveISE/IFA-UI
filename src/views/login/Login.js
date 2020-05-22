import React, { useState, useContext } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import Response from "../../api/mock/resources/loginResponse";
import { AuthContext } from "../../providers/authProvider";
import loginResponse from "../../api/mock/resources/loginResponse";
import { useHistory } from "react-router-dom";
import API from "../../api/mock/Api";

export default function Login() {
  const authContext = useContext(AuthContext);
  const history = useHistory(); // using the
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  // validation of the form + submit is pressed
  function handleSubmit(event) {
    // TODO: validate inputes
    event.preventDefault();    
    authContext.setState({ isLoading: true });
    API.login(Response.userName, Response.password)
      .then((user) => {
        console.log("user", JSON.stringify(user));
        authContext.setState({ user: user, isLoading: false });
        history.push("/");
      })
      .catch((error) => console.log(error)); // TODO: Handle errors
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
            onChange={(e) => setUser(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
