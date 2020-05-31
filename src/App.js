import React from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "./views/dashboard/dashboard";
import AuthProvider from "./providers/authProvider";
import NotificationProvider from "./providers/notificationProvider";

const hist = createBrowserHistory();

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router history={hist}>
          <Switch>
            <Route path="/" render={() => <Dashboard />} />
          </Switch>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
