import React, { useContext } from "react";
import Menu from "../../components/menu/menu";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Teams from "../teams/teams";
import Players from "../players/players";
import Leagues from "../leagues/leagues";
import Coach from "../coach/coach";
import Seasons from "../seasons/seasons";
import Games from "../games/games";
import useStyles from "./dashboardStyle";
import Link from "@material-ui/core/Link";
import { AuthContext } from "../../providers/authProvider";
import Login from "../login/Login";

const hist = createBrowserHistory();

export default function Dashboard() {
  const classes = useStyles();
  const authContext = useContext(AuthContext);

  return (
    <div className={classes.root}>
      <Router history={hist}>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Menu />
        </nav>
        {authContext.state.user ||
        hist.location.pathname === "/login" ? null : (
          <div className={classes.login}>
            <Link href="/login">Login</Link>
          </div>
        )}
        {authContext.state.user ? (
          <div className={classes.login}>
            Hello {authContext.state.user.name}, {"   "}
            <Link
              onClick={() => {
                authContext.setState({ user: null });
              }}
            >
              Logout
            </Link>
          </div>
        ) : null}
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
<<<<<<< HEAD
            <Route path="/games">
              <Games />
            </Route>

            {/* //////////////////// */}
=======
>>>>>>> origin/implement-teams-scenario
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
