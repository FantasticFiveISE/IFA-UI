import React, { useContext } from "react";
import { useStyles } from "../newTeamModal/useStyles";
import { NotificationContext } from "../../providers/notificationProvider";
import {formatMessage} from '../../utils';

export default function NewGameEventForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    gameId: props.gameId,
    gameName: props.gameName,
    minutes: "",
    event: "Goal",
    description: "",
  });

  const notificationContext = useContext(NotificationContext);




  // Move to submit
  const sendMessage = (msg, selfMsg) => {
    try {
      notificationContext.state.client.sendMessage("/topic/game/" + props.gameId, JSON.stringify(selfMsg));
      props.close();
      return true;
    } catch (e) {
      return false;
    }
  }


  const handleSubmit = (notification) => {
    sendMessage("", notification);
  };

  return  (
    <div className={classes.root}>
      <h1>Please fill these form accourding to the game event</h1>
      <div className={classes.formRow}>
        <h3>Enter the minutes in game:</h3>
        <input className={classes.input} type="number" placeholder="MM" min="0" max="90" onChange={(e) => setValues({ ...values, minutes: e.target.value })} required />
      </div>
      <div className={classes.formRow}>
        <h3>Choose an event:</h3>
        <select onChange={(e) => setValues({ ...values, event: e.target.value })}>
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
        <input className={classes.input} type="text" placeholder="Goal By messi" onChange={(e) => setValues({ ...values, description: e.target.value })} required />
      </div>

      {/* TODO: handle submit ONCLICK */}
      <button type="submit" className={classes.submit} onClick={() => handleSubmit(values)}>
        Submit
      </button>
    </div>
  );
}
