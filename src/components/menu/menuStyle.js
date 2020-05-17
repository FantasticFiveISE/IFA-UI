import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../assets/img/menubg.jpg";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    color: 'white',
    backgroundImage: `url(${bgImage})`
  },
  toolbar: {
    ...theme.mixins.toolbar,
    textAlign: "center",
    verticalAlign: "middle",
    fontWeight: "bolder",
    fontSize: "34px",
    lineHeight: "64px",
    color: "white",
  },
}));
