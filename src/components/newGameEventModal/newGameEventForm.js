import React, { useEffect } from "react";
import { useStyles } from "../newTeamModal/useStyles";
import Api from "../../api/mock/Api";

export default function NewGameEventForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    minutes: "",
    event: "",
    description:"",
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
        <h3>Enter the minutes in game:</h3>
        <input className={classes.input} type="number" placeholder="MM" min="0" max="90" onChange={(e) => setValues({...values,minutes:  e.target.value})} required/>
      </div>
      <div className={classes.formRow}>
        <h3>Choose an event:</h3>
        <select onChange={(e) => setValues({...values,event:  e.target.value})}>
          <option value="Goal">Goal</option>
          <option value="Offside">Offside</option>
          <option value="Foul">Foul</option>
          <option value="Red Card">Red Card</option>
          <option value="Yellow Card">Yellow Card</option>
          <option value="Injury">Injury</option>
          <option value="PlayerIn">Player In</option>
          <option value="PlayerOut">Player Out</option>

        </select>
      </div>

      <div className={classes.formRow}>
        <h3>Enter a description of the event:</h3>
        <input className={classes.input} type="text" placeholder="Goal By messi" onChange={(e) => setValues({...values,description:  e.target.value})}  required />
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
