import React from "react";
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


export default function Game(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [createGameEventOpen, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
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
                    {event.id}, {event.dateTime.replace('T',' ')}, {event.gameMinutes}, {event.eventName}, {event.description}
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
        <MenuItem  onClick={handleModalOpen}>Add Event</MenuItem>
        <MenuItem onClick={handleClose}>Create Report</MenuItem>
        <MenuItem onClick={handleClose}>Follow Game</MenuItem>
      </Menu>
    </Card>

    <CreateGameEventModal open={createGameEventOpen} close={handleModalClose} />
    </div>
    

  );
}