import React from "react";
import "./App.css";
import { Provider } from "../api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Edit, List } from "../pages";

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route path="/employees/:employee_id">
            <Edit />
          </Route>

          <Route path="/employees">
            <List></List>
          </Route>

          <Route path="/">
            <Redirect to="/employees" />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
