import React from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
// import Input from "@material-ui/core/Input";
// import FilledInput from "@material-ui/core/FilledInput";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import InputLabel from "@material-ui/core/InputLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import TextField from "@material-ui/core/TextField";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export default function NewTeamForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div>Create new Team</div>
      <div>
        {/* <TextField
          label="With normal TextField"
          id="standard-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Kg</InputAdornment>
            ),
          }}
        /> */}
         <form >
        
        <FormGroup controlId="teamname" >
          <ControlLabel>Team name </ControlLabel>
          <FormControl
            name="teamname"
            // value={this.state.user}
            // onChange={this.userChange}
            type="text" required
            placeholder="Enter your team name please"
          />
        </FormGroup>

        <FormGroup controlId="manager" bsSize="large">
          <ControlLabel>Manager: </ControlLabel>
          <FormControl
            name="manager"
            // value={this.state.password}
            // onChange={this.userChange}
            placeholder="Enter the team manager name"
            type="text" required
          />
        </FormGroup>

        <FormGroup controlId="managerEmail">
          <ControlLabel>Manager's Email: </ControlLabel>
          <FormControl type="email" placeholder="Enter email" />
        </FormGroup>

        <FormGroup controlId="coach" bsSize="large">
          <ControlLabel>Coach: </ControlLabel>
          <FormControl
            name="coach"
            // value={this.state.password}
            // onChange={this.userChange}
            placeholder="Enter the team owner name"
            type="text" required
          />
        </FormGroup>

        <FormGroup controlId="coachEmail">
          <ControlLabel>Coach's Email:  </ControlLabel>
          <FormControl type="email" placeholder="Enter email" />
        </FormGroup>
        {/* //Choose Players to Add */}

        <Button block bsSize="large"  type="submit">
          Login
        </Button>

        </form>
      </div>
    </div>
  );
}
//Owner = user name
//