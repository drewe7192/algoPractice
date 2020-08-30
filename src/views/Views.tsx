import React from "react";
import { faVirus } from "@fortawesome/free-solid-svg-icons";
import Homepage from "../views/HomePage";
import RoutingData from "../routes/routesInstance";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

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
      <Homepage />
      {/* {extractRoutesFromRoutesInfo()} */}
    </div>
  );
};

export default Views;
