import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import NotFound from "../components/NotFound";
import Navigation from "../components/Navigation";

import { history } from "../store";
import routes from "../routes";

import "antd/dist/antd.css";

const App = props => {
  const views = routes.map(({ component, ...rest }, index) => (
    <Route key={index} component={component} {...rest} />
  ));

  return (
    <ConnectedRouter history={history}>
      <Navigation />
      <Switch>
        {views}
        <Route path="*" component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
