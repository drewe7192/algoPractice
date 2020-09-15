import React from "react";

import Homepage from "./../views/HomePage";
import ProducePage from "./../views/ProducePage";

import RoutingData from "../routes/routesInstance";
import { Route } from "react-router-dom";

const extractRoutesFromRoutesInfo = () => {
  RoutingData.getRoutingData().map((r) => {
    const { exact, Component, to } = r;
    return (
      <Route key={to} exact={exact} path={to}>
        <Component />
      </Route>
    );
  });
};

const Views = () => {
  return (
    <div>
      <Route exact={true} path="/">
        <Homepage />
      </Route>

      <Route exact={false} path={"/produce/:id"}>
        <ProducePage />
      </Route>
      {extractRoutesFromRoutesInfo()}
    </div>
  );
};

export default Views;