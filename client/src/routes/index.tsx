import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "../containers/Home";
import { NotFound } from "../containers/Error";
import { TitleBar } from "../components/TitleBar";

export const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
