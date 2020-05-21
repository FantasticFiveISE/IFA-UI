import React, { useState, useEffect } from "react";
import API from "../../api/mock/Api";

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
import {Form, Row, Col,  Modal, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import { Input } from "@material-ui/core";


//Bugs to FIX: 
// 1. scroll bar + modal size
// 2. get content from API correctly (Already have the code)
// 3. lines 54-63 and line 69 change from team to players/coaches/fields

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    // marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export default function NewTeamForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    teamName: "",
    players: {},
    coach: "",
    fields: {},
  });

  // connection to the API to recive data about Players / Coaches / Fields
    // TODO: change from 'team' -> 'players'/ 'coaches'/ 'fields'
  const [team, setTeam] = useState();
  const getTeam = async () => {
    const response = await new API().createTeam();
    setTeam(response);
  };

  useEffect(() => {
    getTeam();
  }, []);
  /////////////////////
  
  
  //need id to select ///
  // Change According to the API response
    // TODO: change from 'products' -> 'players'/ 'coaches'/ 'fields'
  const products = [
    {id:1,name: 'Mohsen the King'},
    {id:2,name: 'Naor'},
    {id:3,name: 'Shaked'},
    {id:4, name: 'team.teamName' }]; 
     
  // const columns = {sa,as};

  const playersCol = [{
    dataField: 'name',
    text: 'Choose Players For your team'
  }];

  const coachesCol = [{
    dataField: 'name',
    text: 'Choose Coaches For your team'
  }];

  const fieldsCol = [{
    dataField: 'name',
    text: 'Choose Fields For your team'
  }];
  
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
  };
  /////////////////

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(prop.name);
  };


  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    // <div className={classes.root}>
    //   <div>Create new Team</div>
    //   <div>
    //     {/* <TextField
    //       label="With normal TextField"
    //       id="standard-start-adornment"
    //       className={clsx(classes.margin, classes.textField)}
    //       InputProps={{
    //         startAdornment: (
    //           <InputAdornment position="start">Kg</InputAdornment>
    //         ),
    //       }}
    //     /> */}

    //   </div>
    // </div>
    <div className={classes.root} >
      <div>Create new Team:</div>
      <Input placeholder="Enter the team name"/>
      <div> 
        {/* Players */}
      <BootstrapTable
        keyField='id'
        data={ products }
        columns={ playersCol }
        selectRow={ selectRow }
        // onTableChange={handleChange}
      />
      {/* Coach */}
      <BootstrapTable
        keyField='id'
        data={ products }
        columns={ coachesCol }
        selectRow={ selectRow }
      />
      {/* Fields */}
      <BootstrapTable
        keyField='id'
        data={ products }
        columns={ fieldsCol }
        selectRow={ selectRow }
      />

         <Button block bsSize="large"  type="submit">
            Add Team
          </Button>
      </div>
    </div>
     

  );
}
//Owner = user name
//