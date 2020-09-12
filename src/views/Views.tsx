import React from "react";
import { faVirus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Homepage from "../views/HomePage";
import RoutingData from "../routes/routesInstance";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Display from "../views/Display";
import HomePage from "../views/HomePage";

const displayRoutes: any = () => {
  // RoutingData.getRoutingData().map((r: any) => {
  //   const { exact, Component, to, data } = r;
  //   return (
  //     <Route key={to} exact={exact} path={to}>
  //       <Homepage />
  //     </Route>
  //   );
  // });
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={HomePage}></Route> */}
        <Route path="/Level1/Searching/linearSearch" component={Display} />
      </Switch>
    </div>
  );
};

const Views = () => {
  const y = false;
  if (y) {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
  return <div>{displayRoutes()}</div>;
};

export default Views;
