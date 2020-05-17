import React from "react";
import Menu from "../../components/menu/menu";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Teams from "../teams/teams";
import Players from "../players/players";
import Leagues from "../leagues/leagues";
import Coach from "../coach/coach";
import Seasons from "../seasons/seasons";
import useStyles from "./dashboardStyle";
/*
   
*/
const hist = createBrowserHistory();

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router history={hist}>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Menu />
        </nav>
        <main className={classes.content}>
          <Switch>
            <Route path="/teams">
              <Teams />
            </Route>
            <Route path="/players">
              <Players />
            </Route>
            <Route path="/coach">
              <Coach />
            </Route>
            <Route path="/leagues">
              <Leagues />
            </Route>
            <Route path="/seasons">
              <Seasons />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
