import React, { useState, useEffect } from "react";
import API from "../../api/mock/Api";
import Team from "../../components/team/team";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import CreateTeamModal from '../../components/newTeamModal/newTeamModal';

const useStyles = makeStyles((theme) => ({
  createTeam: {
    position: "fixed",
    bottom: "10%",
    right: "10%",
  },
}));

export default function () {
  const classes = useStyles();

  const [teams, setTeams] = useState([]);
  const [createTeamOpen, setOpen] = useState(false);

  const getTeams = async () => {
    const response = await new API().getAllTeams();
    setTeams(response);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getTeams();
  }, []);

  return teams.length < 0 ? (
    <div>in Teams</div>
  ) : (
      <div>
        <ul>
          {teams.map((team) => {
            console.log(team);
            return (
              <Team
                key={team.teamName}
                teamName={team.teamName}
                teamStatus={team.teamStatus}
                players={team.players}
                managers={team.managers}
                stadium={team.stadium}
                gameEvents={team.gameEvents}
              />
            );
          })}
        </ul>
        <div className={classes.createTeam}>
          <Fab color="secondary" aria-label="add" onClick={handleOpen}>
            <AddIcon />
          </Fab>
        </div>
        <CreateTeamModal open={createTeamOpen} />
      </div>
    );
}
