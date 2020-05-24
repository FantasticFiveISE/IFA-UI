import React, { useState, useContext } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import Response from "../../api/mock/resources/loginResponse";
import { AuthContext } from "../../providers/authProvider";
import { useHistory } from "react-router-dom";
import API from "../../api/mock/Api";

export default function Login() {
  const authContext = useContext(AuthContext);
  const history = useHistory(); // using the
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  // validation of the form + submit is pressed
  function handleSubmit(event) {
    // TODO: validate inputes
    event.preventDefault();    
    API.login(Response.username, Response.password)
      .then((user) => {
        authContext.setState({ isLoading: true });
        console.log("user", JSON.stringify(user));
        authContext.setState({ user: user, isLoading: false });
        history.push("/");
        setError(false);

      })
      .catch((error) => {// TODO: Handle errors
        console.log(error);  
        setError(true);
        // authContext.setState({ error: error, isLoading: false });
      }
      ); 

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
            required
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </FormGroup>
        {error === true ? (
          <p Style="color:red;">Invalid username or password</p>
        ) : null}
        <Button block bsSize="large" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
