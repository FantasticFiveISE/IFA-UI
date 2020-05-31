import React, { useContext, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer'; // team icon
import ScheduleIcon from '@material-ui/icons/Schedule'; //date icon
import PlaceIcon from "@material-ui/icons/Place"; //field icon
import EventNoteIcon from '@material-ui/icons/EventNote'; //gameEvents icon
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'; //referee icon
import GradeIcon from '@material-ui/icons/Grade'; //score icon
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from "./gameStyle";
import CreateGameEventModal from "../../components/newGameEventModal/newGameEventModal";
import { NotificationContext } from "../../providers/notificationProvider";
import { AuthContext } from "../../providers/authProvider";
import { formatMessage } from '../../utils';
import SockJsClient from "react-stomp";
import API from "../../api/Api";

import logger from '../../logger';

export default function Game(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [createGameEventOpen, setOpen] = React.useState(false);
  const notificationContext = useContext(NotificationContext);
  const authContext = useContext(AuthContext);
  const [events, setEvents] = React.useState(null);
  let clientRef;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (events === null) {
      setEvents(props.gameEvents.map(event => formatMessage(event)));
    }
  }, [])

  const addEventToGame = (gameEvent) => {
    logger.log("Game -> addEventToGame: ", gameEvent);
    logger.log("Game -> addEventToGame, Events: ", events);

    setEvents([...events, gameEvent]);
  }

  const downloadTxtFile = async () => {
    const fileName = "report";
    const json = JSON.stringify(events);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  const handleFollow = async (gameId) => {
    logger.log('Game -> handleFollow', `Add follower: ${authContext.state.user.username} to gameId: ${gameId}`);

    notificationContext.setState(
      {
        ...notificationContext.state,
        topics: [...notificationContext.state.topics, "/topic/game/register/" + gameId]
      }
    );
    API.followGame(authContext.state.user.username, gameId);
    handleClose();
  }

  const handleModalOpen = () => {
    setOpen(true);
    handleClose();
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          action={
            authContext.state.user && <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          title={`${props.hostTeam} - ${props.guestTeam}`}
        />

        <CardContent>
          <div className={classes.contentContainer}>
            <div className={classes.contentCol}>
              <div className={classes.catagory}>
                <SportsSoccerIcon />
                <p className={classes.catagoryUl}>{props.hostTeam} -</p>
                <p className={classes.catagoryUl}>{props.guestTeam}</p>
              </div>
              <div className={classes.catagory}>
                <EmojiFlagsIcon />
                <ul className={classes.catagoryUl}>
                  {props.referees.map((referee) => (
                    <li key={referee.userName} className={classes.catagoryLi}>
                      {referee.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={classes.contentCol}>
              <div className={classes.catagory}>
                <PlaceIcon />
                <p className={classes.catagoryUl}>{props.field.fieldName}</p>
              </div>
              <div className={classes.catagory}>
                <ScheduleIcon />
                <p className={classes.catagoryUl}>{props.gameDate}</p>
              </div>
              <div className={classes.catagory}>
                <GradeIcon />
                <p className={classes.catagoryUl}>{props.gameScore}</p>
              </div>
            </div>
          </div>
          <div className={classes.events}>
            <EventNoteIcon />
            <ul className={classes.catagoryUl}>
              {events && events.map((event) => (
                <li key={event.id} className={classes.catagoryLi}>
                  {event.split('\n').map((line, i) => <p className={i === 0 && classes.eventFirstLine}>{line}</p>)}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        {authContext.state.user !== null && <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {props.canEdit && <MenuItem onClick={handleModalOpen}>Add Event</MenuItem>}
          {props.canEdit && <MenuItem onClick={downloadTxtFile}>Create Report</MenuItem>}
          <MenuItem onClick={() => handleFollow(props.gameId)}>Follow Game</MenuItem>
        </Menu>}
      </Card>
      <SockJsClient url="http://localhost:8080/notifications" topics={["/topic/game/register/" + props.gameId]}
        onMessage={addEventToGame} ref={(client) => { clientRef = client }}
        onConnect={() => { }}
        onDisconnect={() => { }}
        debug={false} />
      <CreateGameEventModal gameId={props.gameId} gameName={`${props.hostTeam}-${props.guestTeam}`} open={createGameEventOpen} close={handleModalClose} />


    </div>

  );
}