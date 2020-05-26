import React, { useEffect } from "react";
import { useStyles } from "../newTeamModal/useStyles";
import Api from "../../api/mock/Api";

export default function NewAlertForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    alertsMessages: [],
    initialize: false,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const alerts = await Api.login();
    console.log(alerts);

    // console.log(leagues);
    setValues({ ...values, alertsMessages: alerts.alertsMessages, initialize: true });
    // console.log(values.leagues);
  };

  const handleSeasonsChange = (event) => {
    const league = event.target.value;
    console.log(values.selectedLeague);
    if (values.selectedLeague && values.selectedLeague.indexOf(league) >= 0) {
   //
    } else {
      setValues({
        ...values,
        selectedLeague:  league,
      });
    }
    console.log(values.selectedLeague);

  };

  const handlePolicyChange = (event) => {
    const policy = event.target.value;
    setValues({
        ...values,
        schedulePolicy: policy,
        
      });
      console.log(values.schedulePolicy);
      console.log(values);

  };

  return values.initialize ? (
    <div className={classes.root}>
      <h1>Notifications you have missed:</h1>
      {values.alertsMessages.map((league, index) => (
        <div className={classes.formRow} key={index}>
            <h3 id={league} value={league}>{index+1} - {league}</h3>
        </div>
      ))}    
      <button type="button" className={classes.submit} onClick={props.close}>
        Close
      </button>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
