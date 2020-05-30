import React, { useState, useContext } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { AuthContext } from "../../providers/authProvider";
import { useHistory } from "react-router-dom";
import API from "../../api/Api";
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Login() {
  const authContext = useContext(AuthContext);

  const history = useHistory(); // using the
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  // validation of the form + submit is pressed
  function handleSubmit(event) {
    // TODO: validate inputes
    event.preventDefault();
    API.login(user, password)
      .then(res => {
        return res.json()
      })
      .then((user) => {
        authContext.setState({user: user, isLoading: false });
        history.push('/');
        return user;
      })
      .catch((error) => {// TODO: Handle errors
        authContext.setState({...authContext.state, isLoading: false, error: true, errorMessage: error });
      }
      );
    authContext.setState({ isLoading: true });
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
        {authContext.state.error === true ? (
          <Alert severity="error">Invalid username or password</Alert>
        ) : null}
        <Button block bsSize="large" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
