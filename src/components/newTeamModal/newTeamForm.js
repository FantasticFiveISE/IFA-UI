import React, { useState, useEffect } from "react";
import API from "../../api/mock/Api";
import { makeStyles } from "@material-ui/core/styles";
import {Form, Row, Col,  Modal, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import { Input } from "@material-ui/core";
import  { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';


//Bugs to FIX: 
// 1. scroll bar 
// 2. use the data we got from the user + redirect! 

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // overflow: "auto",
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


/////
export default function NewTeamForm() {
  const classes = useStyles();
  const history = useHistory();

  // ----------------------------------- Final values Choosen by the user -----------------------------
  const values ={
    teamName: "",
    players: [],
    coach: "", // coach or coahces????????????????????????
    fields: [],
  };
  
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
  
  const selectRowPlayers = {
    mode: 'checkbox',
    clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      // console.log(row);
      // console.log(isSelect);
      // console.log(rowIndex);
      values.players.push(row.name);
      console.log(values);

    }
  };

  const selectRowCoachs = {
    mode: 'checkbox',
    clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      // console.log(row);
      // console.log(isSelect);
      // console.log(rowIndex);
      values.coach = row.name;
      console.log(values);

    }
  };

  const selectRowFields = {
    mode: 'checkbox',
    clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      // console.log(row);
      // console.log(isSelect);
      // console.log(rowIndex);
      values.fields.push(row.name);
      console.log(values);

    }
  };
  
  //--------------------------- Values from the DB to show on the form -------------------------------
  const [adProp, setAdProp] = useState([]);
  const getAdProp = async () => {
    const response = await new API().createTeam();
    setAdProp(response);
  };

  useEffect(() => {
    getAdProp();
  }, []);
 
  //--------------------------- Handels ----------------------------------------------------------------

  const handleChange =(event) => {
    let valueName = event.target.name;
    if(valueName === 'teamName'){
      values.teamName = event.target.value;
    }    
    // console.log(values);
    // console.log(valueName);
  };


  //TODO: instead of Alert -> Post request with new team details!
  //TODO: history?
  const handleSubmit = (event) =>{
    if(event.target.name === 'add'){
      alert("Team Name: "+ values.teamName + " | Players:" + values.players+
      " | Coaches:" +values.coach+ " | Fields:"+ values.fields); 
    }else{
      return <Redirect to='/login'  />
    }
    history.goBack();
    event.preventDefault();
    // redirect to other page + send POST REQUEST 
  }

  // ---------------------------------- Form-------------------------------------------------------
  return adProp.length < 0 ? (
    <div>Cant build new Team</div>
    ) : (
      <div className={classes.root}>
        <h3>Create new Team:</h3>
          <Input name="teamName" placeholder="Enter the team name" onChange={handleChange} />
          {adProp.map((team, index) => {
            console.log(team);
            console.log(team.aviableCoaches);
            return (
              <div>
            <BootstrapTable
            keyField='id'
            data={ team.aviablePlayers }
            columns={ playersCol }
            selectRow={ selectRowPlayers }
            name="players"
            />
            
            <BootstrapTable
            keyField='id'
            data={ team.aviableCoaches }
            columns={ coachesCol }
            selectRow={ selectRowCoachs }
           />
              
           <BootstrapTable
            keyField='id'
            data={ team.aviableFields }
            columns={ fieldsCol }
            selectRow={ selectRowFields }
            />
            </div>
            );
          })}
        <Button block bsSize="large" name="add" type="submit" onClick={handleSubmit}>
             Create Team
           </Button>
      </div>
  );
}
