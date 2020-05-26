import React, { useState}  from "react";
import useStyles from "./loggedinUserPanelStyle";
import Link from "@material-ui/core/Link";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import CreateAlertModal from "../../components/newStaticAlert/newStaticAlertModal";
export default function LoggedinUserPanel(props) {
  const classes = useStyles();

  const handleNotificationPressed = () => {
    console.log("notification pressed!");
  };
  const [createSeasonOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.loggedin}>
      {/* <NotificationsIcon fontSize="small" className={classes.notification}/> */}
      <IconButton
        className={classes.notification}
        aria-label="show 11 new notifications"
        color="inherit"
        onClick={handleNotificationPressed}
      >
        <Badge badgeContent={11} color="secondary" onClick={handleOpen}>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      Hello {props.authContext.state.user.name}, {"   "}
      <Link
        onClick={() => {
          props.authContext.setState({ user: null });
        }}
      >
        Logout
      </Link>
      <CreateAlertModal open={createSeasonOpen} close={handleClose} />
    </div>
  );
}
