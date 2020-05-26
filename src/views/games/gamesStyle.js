import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    overflow: 'hidden' /* Hide scrollbars */
  },
  gameContainer: {
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
    marginTop: '3%',
    overflow: 'hidden' /* Hide scrollbars */
  }
}));
