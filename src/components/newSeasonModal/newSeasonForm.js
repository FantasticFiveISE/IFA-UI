import React, { useEffect } from "react";
import { useStyles } from "../newTeamModal/useStyles";
import Api from "../../api/mock/Api";

export default function NewSeasonForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    season: "",
    leagues: [],
    selectedLeague: "",
    schedulePolicy: "",
    win_points: "3", // default ranking method
    lose_points: "0",// default ranking method
    draw_points: "1",// default ranking method
    initialize: false,
  });

  useEffect(() => {
    loadData();
    console.log(values);
  }, []);

  const loadData = async () => {
    const [leagues] = await Promise.all([
      Api.getLeagues({ ...values, available: true }),
    ]);
    //console.log(leagues);

    //console.log(leagues.leagueName);
    setValues({ ...values, leagues: leagues, initialize: true });
    //console.log(values.leagues);
  };

  const handleSeasonsChange = (event) => {
    const league = event.target.value;
    //console.log(values.selectedLeagues);
    if (values.selectedLeagues && values.selectedLeagues.indexOf(league) >= 0) {
   //
    } else {
      setValues({
        ...values,
        selectedLeague:  league,
      });
    }
    //(values.selectedLeagues);

  };

  const handlePolicyChange = (event) => {
    const policy = event.target.value;
    setValues({
        ...values,
        schedulePolicy: policy,
        
      });
      //console.log(values.schedulePolicy);

  };

  return values.initialize ? (
    <div className={classes.root}>
      <h1>Create new Season</h1>
      <div className={classes.formRow}>
        <h3>Enter Season year:</h3>
        <input className={classes.input} type="number" placeholder="YYYY" min="2020" max="2100" onChange={(e) => setValues({...values,season:  e.target.value})}/>
      </div>
      <div className={classes.formRow}>
        <h3>Choose league</h3>
        {values.leagues.map((league) => (
          <label key={league} className={classes.checkbox}>
            <input
              type="radio"
              id={league}
              value={league}
              onClick={handleSeasonsChange}
              name="leagues"
              required
            />
            <p className={classes.checkboxLabel}>{league}</p>
          </label>
        ))}
      </div>
      <div className={classes.formRow} onChange={handlePolicyChange}>
        <h4>Choose schedule game policy for this season:</h4>
        <label className={classes.checkbox}>
          <input
            type="radio"
            id="policy1"
            name="policy"
            value="OneGame"
            // onClick={handlePolicyChange}
            
          />
          <p className={classes.checkboxLabel}>OneGame</p>
         
        </label>
        <label className={classes.checkbox}>
          <input
            type="radio"
            id="policy2"
            name="policy"
            value="TwoGameSchedulingMethod"
            // onClick={handlePolicyChange}
            
          />
          <p className={classes.checkboxLabel}>TwoGame</p>
         
        </label>
      </div>
      <div className={classes.formRow}>
        <h4>Choose ranking methode policy for this season:</h4>
        <label className={classes.checkbox}>
          <p>Win:</p>
          <br/>
          <input className={classes.ranking} name="ranking" type="number" placeholder="3" min="0" max="10" onChange={(e) => setValues({...values,win_points:  e.target.value})}/>
        </label>
        <label className={classes.checkbox}>
          <p>Draw:</p>
          <br/>
          <input className={classes.ranking} name="ranking" type="number" placeholder="1" min="0" max="10" onChange={(e) => setValues({...values,draw_points:  e.target.value})}/>
        </label>
        <label className={classes.checkbox}>
          <p>Lose:</p>
          <br/>
          <input className={classes.ranking} name="ranking" type="number" placeholder="0" min="0" max="10" onChange={(e) => setValues({...values,lose_points:  e.target.value})}/>
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
