import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  loggedin: {
    right: "5%",
    position: "fixed",
    marginTop: "1%",
    width: "266px",
  },
  notification: {
    right: '14px',
    width: '50px',
    height: '50px',
    padding: 0,
    position: 'relative',
  },
  notificationMenu: {
    top: '49px',
    left: '1768px'
  },
  notificationAlert: {
    maxWidth: '100px'
  }
}));
