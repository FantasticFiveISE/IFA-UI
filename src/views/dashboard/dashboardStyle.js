import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../assets/img/green-background.jpg"

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: 'hidden' /* Hide scrollbars */

  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: `url(${bgImage}) no-repeat center center fixed`,
    minHeight: 900
  },
  login: {
    right: 0,
    position: 'fixed',
    margin: "1% 4% 0 0",
  },
}));
