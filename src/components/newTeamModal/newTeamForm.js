import React, { useEffect } from "react";
import { useStyles } from "./useStyles";
import Api from "../../api/mock/Api";

export default function NewTeamForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    teamName: "",
    players: [],
    coach: [],
    selectedPlayers: [],
    stadium: "",
    initialize: false,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [players] = await Promise.all([
      Api.getPlayers({ ...values, available: true }),
    ]);
    setValues({ ...values, players: players, initialize: true });
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

  const handleStadiumChange = (event) => {};

  const handleCoachesChange = (event) => {};
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
        <label className={classes.checkbox}>
          <input
            type="checkbox"
            id="periph1"
            name="peripherals"
            value="screen"
          />
          <p className={classes.checkboxLabel}>coach1</p>
        </label>
      </div>
      <div className={classes.formRow}>
        <h3>Choose stadium</h3>
        <label className={classes.checkbox}>
          <input
            type="checkbox"
            id="periph1"
            name="peripherals"
            value="screen"
          />
          <p className={classes.checkboxLabel}>stadium1</p>
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
