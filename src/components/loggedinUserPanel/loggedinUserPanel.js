import React, { useContext } from "react";
import useStyles from "./loggedinUserPanelStyle";
import Link from "@material-ui/core/Link";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { NotificationContext } from "../../providers/notificationProvider";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function LoggedinUserPanel(props) {
  const classes = useStyles();
  const notificationContext = useContext(NotificationContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleNotificationPressed = (event) => {
    if(notificationContext.state.notifications.length > 0)  {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    notificationContext.setState({...notificationContext.state, notifications: []});
    setAnchorEl(null);
  };

  return (
    <div className={classes.loggedin}>
      <IconButton
        className={classes.notification}
        color="inherit"
        onClick={handleNotificationPressed}
      >
        <Badge badgeContent={notificationContext.state.notifications.length} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      {anchorEl && 
        <Menu
          id="notification-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          keepMounted
          open={true}
          onClose={handleClose}
        >
          {
            notificationContext.state.notifications.map(notification => <MenuItem >{notification}</MenuItem>)
          }
        </Menu>}
      Hello {props.authContext.state.user.name}, {"   "}
      <Link
        onClick={() => {
          props.authContext.setState({ user: null });
        }}
      >
        Logout
      </Link>
    </div>
  );
}
