import React, { useState, useEffect, useContext } from "react";
import API from "../../api/mock/Api";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import CreateSeasonModal from "../../components/newSeasonModal/newSeasonModal";
import { AuthContext } from "../../providers/authProvider";

const useStyles = makeStyles((theme) => ({
  createTeam: {
    position: "fixed",
    bottom: "10%",
    right: "10%",
  },
}));

export default function() {
    const classes = useStyles();
    const authContext = useContext(AuthContext);
  
    const [leagues, setLeagues] = useState([]);
    const [createSeasonOpen, setOpen] = useState(false);
  
    const getLeagues = async () => {
      const response = await API.getLeagues(true);
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
      <div>
        {/* <ul>
          {leagues.map((team) => {
            console.log(team);
            return (
              <Team
                key={team.teamName}
                teamName={team.teamName}
                teamStatus={team.teamStatus}
                players={team.players}
                managers={team.managers}
                stadium={team.stadium}
              />
            );
          })}
        </ul> */}
        {(authContext.state.user &&
        authContext.state.user.roles.indexOf("FAN") >= 0) || true? (
          <div className={classes.createTeam}>
            <Fab color="secondary" aria-label="add" onClick={handleOpen}>
              <AddIcon />
            </Fab>
          </div>
        ) : null}
        <CreateSeasonModal open={createSeasonOpen} close={handleClose} />
      </div>
    );}