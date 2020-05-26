import React, { useContext  } from "react";
import { useStyles } from "../newTeamModal/useStyles";
import { AuthContext } from "../../providers/authProvider";

export default function NewAlertForm(props) {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  console.log(authContext.state.user);

  return (
    <div className={classes.root}>
      <h2>Notifications you have missed:</h2>
      
      {authContext.state.user.alertsMessages.map((league, index) => (
        <div className={classes.formRow} key={index}>
            <h5 id={league} value={league}>{index+1} - {league}</h5>
        </div>
      ))}    
      <button type="button" className={classes.submit} onClick={props.close}>
        Close
      </button>
    </div>
  ) 
}
