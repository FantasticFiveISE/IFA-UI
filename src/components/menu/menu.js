import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import useStyles from "../menu/menuStyle";

const getGeustList = () => {  
  return (
    <List>
      {["Teams", "Players", "Coach", "Leagues", "Seasons", "Games"].map(
        (text, index) => (
          <ListItem button key={text} component={Link} to={"/" + text}>
            <ListItemText primary={text} />
          </ListItem>
        )
      )}
    </List>
  );
};

export default function Menu() {
  const list = () => (
    <div>
      <div className={classes.toolbar}>IFA-UI</div>
      <Divider />
      {getGeustList()}
      <Divider />
    </div>
  );

  const classes = useStyles();

  return (
    <div>
      <Drawer
        classes={{
          paper: classes.drawerPaper
        }}
        variant="permanent"
        open
        ModalProps={{ keepMounted: true }}
      >
        {list()}
      </Drawer>
    </div>
  );
}