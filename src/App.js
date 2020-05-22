import React from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./views/dashboard/dashboard";
import AuthProvider from "./providers/authProvider";

const hist = createBrowserHistory();

function App() {
  return (
    <AuthProvider>
      <Router history={hist}>
        <Switch>
          <Route path="/" render={() => <Dashboard />} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
