import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";


export default makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    marginBottom: "35%",
  },
  catagoryUl: {
    listStyleType: "none",
    padding: "0",
    margin: "1% 0 0 4%",
  },
  catagoryLi: {
    marginBottom: "35%",
  },
  contentContainer: {
    display: "flex",
    justifyContent: " space-between",
  },
  contentCol: {
    display: "flex",
    flexFlow: "column",
  },
}));
