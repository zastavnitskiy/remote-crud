import React from "react";
import "./App.css";
import { Provider } from "../../api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { New, Edit, View } from "../../pages";

export function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route path="/employees/new">
            <New />
          </Route>

          <Route path="/employees/:employee_id">
            <Edit />
          </Route>

          <Route path="/employees">
            <View />
          </Route>

          <Route path="/">
            <Redirect to="/employees" />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
