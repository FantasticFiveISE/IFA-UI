import React, { useContext } from "react";
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

export default function Game(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [createGameEventOpen, setOpen] = React.useState(false);
  const notificationContext = useContext(NotificationContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const downloadTxtFile = async () => {
    const fileName = "report";
    const json = JSON.stringify(props.gameEvents);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFollow = async (gameId) => {
    notificationContext.setState(
      {
        ...notificationContext.state,
        topics: [...notificationContext.state.topics, "/topic/game/register/" + gameId]
      }
    );
  }

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
        //title={props.teamName}
        //subheader={props.teamStatus}
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
              <div className={classes.catagory}>
                <EventNoteIcon />
                <ul className={classes.catagoryUl}>
                  {props.gameEvents.map((event) => (
                    <li key={event.id} className={classes.catagoryLi}>
                      {event.id}, {event.dateTime.replace('T', ' ')}, {event.gameMinutes}, {event.eventName}, {event.description}
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
        </CardContent>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleModalOpen}>Add Event</MenuItem>
          <MenuItem onClick={downloadTxtFile}>Create Report</MenuItem>
          <MenuItem onClick={() => handleFollow(props.gameId)}>Follow Game</MenuItem>
        </Menu>
      </Card>

      <CreateGameEventModal gameId={props.gameId} gameName={`${props.hostTeam}-${props.guestTeam}`} open={createGameEventOpen} close={handleModalClose} />


    </div>

  );
}