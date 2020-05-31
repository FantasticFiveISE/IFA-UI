import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  formRow: {
    display: "flex",
    flexFlow: "column",
    width: "70%",
    justifyContent: "space-between",
  },
  input: {
    height: "21px",
    border: "0",
    borderBottom: "1px solid black",
  },
  checkbox: {
    display: "flex",
    flexFlow: "row",
    marginTop: "0",
  },
  checkboxLabel: {
    margin: "-1px 0 0 5px",
  },
  submit: {
    marginTop: '14%',
    backgroundColor: "#f50057",
  },
  ranking: {
    height: "20px",
    marginLeft:"15px",
    marginTop:"13px",
    width:"100px",
    border: "0",
    borderBottom: "1px solid black",
  } ,
  list: {
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
  listContainer: {
    width: '100%',
    maxWidth: 360,
    position: 'relative',
    overflow: 'auto',
    overflowX: 'hidden',
    maxHeight: '500px',
    listStyleType: "none",
    padding: "0",
    margin: "1% 0 0 4%",
  }
}));
