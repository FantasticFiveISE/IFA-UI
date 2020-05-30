
import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },
  teams: {
    display: 'flex',
    width: '100%',
    flexFlow: 'row',
    flexWrap: 'wrap',
  },
  createTeam: {
    position: "fixed",
    bottom: "10%",
    right: "10%",
  },
}));
