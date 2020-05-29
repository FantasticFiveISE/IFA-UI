import React, { useEffect } from "react";
import { useStyles } from "./useStyles";
import Api from "../../api/Api";

export default function NewTeamForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    teamName: "",
    players: [],
    coaches: [],
    selectedCoach: "",
    fields: [],
    selectedPlayers: [],
    selectedStadium: "",
    initialize: false,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [players] = await Promise.all([
      Api.getPlayers({ ...values, available: true }),
    ]);
    const [coaches] = await Promise.all([
      Api.getCoaches({ ...values, available: true }),
    ]);
    const [fields] = await Promise.all([
      Api.getFields({ ...values, available: true }),
    ]);
    setValues({ ...values, players: players, coaches: coaches, fields: fields, initialize: true });
  };

  const handlePlayersChange = (event) => {
    const player = event.target.value;
    if (values.selectedPlayers && values.selectedPlayers.indexOf(player) >= 0) {
      const i = values.selectedPlayers.indexOf(player);
      const newPlayersList = values.selectedPlayers
        .slice(0, i)
        .concat(
          values.selectedPlayers.slice(i + 1, values.selectedPlayers.length)
        );
      setValues({ ...values, selectedPlayers: newPlayersList });
    } else {
      setValues({
        ...values,
        selectedPlayers: [...values.selectedPlayers, player],
      });
    }
  };

  const handleStadiumChange = (event) => {
    const field = event.target.value;
    if (values.selectedStadium && values.selectedStadium.length !== 0) {
      setValues({ ...values, selectedStadium: "" });
    } else {
      setValues({
        ...values,
        selectedStadium: field,
      });
    }
  };

  const handleCoachesChange = (event) => {
    const coach = event.target.value;
    if (values.selectedCoach && values.selectedCoach.length !== 0) {
      setValues({ ...values, selectedCoach: "" });
    } else {
      setValues({
        ...values,
        selectedCoach: coach,
      });
    }
  };


  return values.initialize ? (
    <div className={classes.root}>
      <h1>Create new Team</h1>
      <div className={classes.formRow}>
        <h3>Enter team name</h3>
        <input className={classes.input} placeholder="Team name" />
      </div>
      <div className={classes.formRow}>
        <h3>Choose players</h3>
        {values.players.map((player) => (
          <label key={player.name} className={classes.checkbox}>
            <input
              type="checkbox"
              id={player.name}
              name={player.name}
              value={player.userName}
              onChange={handlePlayersChange}
            />
            <p className={classes.checkboxLabel}>{player.name}</p>
          </label>
        ))}
      </div>
      <div className={classes.formRow}>
        <h3>Choose coach</h3>
        {values.coaches.map((c) => (
          <label key={c.name} className={classes.checkbox}>
            <input
              type="Radio"
              id={c.name}
              name="RadioCoach"
              value={c.userName}
              onChange={handleCoachesChange}
            />
            <p className={classes.checkboxLabel}>{c.name}</p>
          </label>
        ))}
      </div>
      <div className={classes.formRow}>
        <h3>Choose stadium</h3>
        {values.fields.map((f) => (
          <label key={f.fieldName} className={classes.checkbox}>
            <input
              type="Radio"
              id={f.fieldName}
              name="RadioField"
              value={f.fieldName}
              onChange={handleStadiumChange}
            />
            <p className={classes.checkboxLabel}>{f.fieldName}</p>
          </label>
        ))}
      </div>

      <button type="submit" className={classes.submit} onClick={props.close}>
        Submit
      </button>
    </div >
  ) : (
      <div>Loading...</div>
    );
}
