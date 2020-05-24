import React, { useEffect } from "react";
import { useStyles } from "../newTeamModal/useStyles";
import Api from "../../api/mock/Api";

export default function NewGameEventForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    date: "",
    hour: "",
    minutes: "",
    event: "",
    initialize: false,
  });

  useEffect(() => {
    loadData();
  }, []);
  //TODO: delete
  const loadData = async () => {
    const [leagues] = await Promise.all([
      Api.getLeagues({ ...values, available: true }),
    ]);
    console.log(leagues);

    console.log(leagues.leagueName);
    setValues({ ...values, leagues: leagues, initialize: true });
    console.log(values.leagues);
  };



  const handleSubmit = (event) => {
    console.log(values);

    //Post request
  };
  
  return values.initialize ? (
    <div className={classes.root}>
      <h1>Please fill these form accourding to the game event</h1>
      <div className={classes.formRow}>
        <h3>Enter the date:</h3>
        <input className={classes.input} type="date" placeholder="YYYY" min="2020" max="2100" onChange={(e) => setValues({...values,date:  e.target.value})} required/>
      </div>
      <div className={classes.formRow}>
        <h3>Enter the hour:</h3>
        {/* <input className={classes.input} type="time" placeholder="YYYY" min="2020" max="2100" /> */}
        <input type="time" name="time" placeholder="hrs:mins" pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$" onChange={(e) => setValues({...values,hour:  e.target.value})}  required/>
      </div>
      <div className={classes.formRow}>
        <h3>Enter the minutes in game:</h3>
        <input className={classes.input} type="number" placeholder="MM" min="0" max="90" onChange={(e) => setValues({...values,minutes:  e.target.value})} required/>
      </div>
      <div className={classes.formRow}>
        <h3>Enter a description of the event:</h3>
        <input className={classes.input} type="text" placeholder="Goal By messi" onChange={(e) => setValues({...values,event:  e.target.value})}  required />
      </div>

        {/* TODO: handle submit ONCLICK */}
      <button type="submit" className={classes.submit} onClick={props.close}>
        Submit
      </button>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
