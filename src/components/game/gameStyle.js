import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";


export default makeStyles((theme) => ({
  root: {
    width: 485,
    height: 470,
    margin: 20,
    backgroundColor: 'rgba(255,255,255,0.9)'
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  catagory: {
    display: "flex",
    flexFlow: "row",
    width: '190px',
    marginBottom: "20%",
  },
  catagoryUl: {
    width: '100%',
    maxWidth: 360,
    position: 'relative',
    overflow: 'auto',
    overflowX: 'hidden',
    maxHeight: '120px',
    listStyleType: "none",
    padding: "0",
    margin: "1% 0 0 4%",
  },
  catagoryLi: {
    marginBottom: "10%",
  },
  contentContainer: {
    display: "flex",
    justifyContent: " space-between",
    width: ' 90%',
    margin: '0 auto'
  },
  contentCol: {
    display: "flex",
    flexFlow: "column",
  },
  subtitleOpen: {
    color: '#27AE60'
  },
  subtitleClose: {
    color: 'e74c3c'
  },
  subtitlePending: {
    color: '#d35400'
  },
  events: {
    width: '94%',
    paddingLeft: '6%'
  },
  eventFirstLine: {
    fontWeight: 'bold'
  }
}));
