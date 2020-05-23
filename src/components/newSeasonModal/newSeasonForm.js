import React, { useEffect } from "react";
import { useStyles } from "../newTeamModal/useStyles";
import Api from "../../api/mock/Api";

export default function NewTeamForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    season: "",
    leagues: [],
    selectedLeagues: [],
    schedulePolicy: "",
    rankingMethod: "",
    initialize: false,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [leagues] = await Promise.all([
      Api.getLeagues({ ...values, available: true }),
    ]);
    console.log(leagues);

    console.log(leagues.leagueName);
    setValues({ ...values, leagues: leagues, initialize: true });
    console.log(values.leagues);
  };

  const handleSeasonsChange = (event) => {
    const league = event.target.value;
    if (values.selectedLeagues && values.selectedLeagues.indexOf(league) >= 0) {
      const i = values.selectedLeagues.indexOf(league);
      const newLeaguesList = values.selectedLeagues
        .slice(0, i)
        .concat(
          values.selectedLeagues.slice(i + 1, values.selectedLeagues.length)
        );
      setValues({ ...values, selectedLeagues: newLeaguesList });
    } else {
      setValues({
        ...values,
        selectedLeagues: [...values.selectedLeagues, league],
      });
    }
  };

  const handlePolicyChange = (event) => {
    const policy = event.target.value;
    if (values.schedulePolicy && values.schedulePolicy.trim() !== "") {
      
      setValues({ ...values, schedulePolicy: "" });
    } else {
      setValues({
        ...values,
        schedulePolicy: [...values.schedulePolicy, policy],
      });
    }

  };

  return values.initialize ? (
    <div className={classes.root}>
      <h1>Create new Season</h1>
      <div className={classes.formRow}>
        <h3>Enter Season year:</h3>
        <input className={classes.input} type="number" placeholder="YYYY" min="2020" max="2100" />
      </div>
      <div className={classes.formRow}>
        <h3>Choose league</h3>
        {values.leagues.map((league) => (
          <label key={league.leagueName} className={classes.checkbox}>
            <input
              type="radio"
              id={league.leagueName}
              value={league.leagueName}
              onChange={handleSeasonsChange}
              name="leagues"
              required
            />
            <p className={classes.checkboxLabel}>{league.leagueName}</p>
          </label>
        ))}
      </div>
      <div className={classes.formRow}>
        <h3>Choose schedule game policy for this season:</h3>
        <label className={classes.checkbox}>
          <input
            type="radio"
            id="policy1"
            name="peripherals"
            value="screen"
            onChange={handlePolicyChange}
            required
          />
          <p className={classes.checkboxLabel}>methode1</p>
         
        </label>
        <label className={classes.checkbox}>
          <input
            type="radio"
            id="policy2"
            name="peripherals"
            value="screen"
            required
          />
          <p className={classes.checkboxLabel}>methode2</p>
         
        </label>
      </div>
      <div className={classes.formRow}>
        <h3>Choose ranking methode policy for this season:</h3>
        <label className={classes.checkbox}>
          <input
            type="radio"
            id="rank"
            name="peripherals"
            value="screen"
            required
          />
          <p className={classes.checkboxLabel}>Default  </p>
        </label>
      </div>
      <button type="submit" className={classes.submit} onClick={props.close}>
        Submit
      </button>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
