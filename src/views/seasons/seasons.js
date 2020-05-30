import React, { useState, useEffect, useContext } from "react";
import API from "../../api/Api";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CreateSeasonModal from "../../components/newSeasonModal/newSeasonModal";
import { AuthContext } from "../../providers/authProvider";
import Season from "../../components/season/season"
import { useStyles } from "./useStyles";


export default function () {
  const classes = useStyles();
  const authContext = useContext(AuthContext);

  const [leagues, setLeagues] = useState([]);
  const [createSeasonOpen, setOpen] = useState(false);

  const getLeagues = async () => {
    const response = await API.getLeagues({ available: true });
    setLeagues(response);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getLeagues();
  }, []);

  return leagues.length < 0 ? (
    <div>in Teams</div>
  ) : (
      <div className={classes.root}>
        <ul className={classes.teams}>
          {leagues.map((league, index) => {
            console.log(league);
            return (
              <Season
                key={index}
                begin={league.begin}
                leagueName={league.leagueName}
                rankingMethod={league.rankingMethod}
                referees={league.referees}
                schedulingMethod={league.schedulingMethod}
                season={league.season}
                teamsInLeaguePerSeason={league.teamsInLeaguePerSeason}
                index={index}
              />
            );
          })}
          </ul>

        {/* Change to ASSOCIATION_AGENT */}
        {(authContext.state.user &&
          authContext.state.user.roles.indexOf("FAN") >= 0) ? (
            <div className={classes.createTeam}>
              <Fab color="secondary" aria-label="add" onClick={handleOpen}>
                <AddIcon />
              </Fab>

            </div>
          ) : null}
        <CreateSeasonModal open={createSeasonOpen} close={handleClose} />
      </div>
    );
}