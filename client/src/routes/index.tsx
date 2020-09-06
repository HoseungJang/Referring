import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "../containers/Home";
import { NotFound } from "../containers/Error";
import { TitleBar } from "../components/Layout/TitleBar";
import { Content } from "../components/Layout/Content";

export const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <TitleBar />
      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Content>
    </BrowserRouter>
  );
};
