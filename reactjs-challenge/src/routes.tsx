import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./Pages/Users";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
