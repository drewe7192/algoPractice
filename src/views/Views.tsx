import React from "react";
import Homepage from "./../views/HomePage";
import ProductPage from "./../views/ProductPage"//'./ProductPage'
// import { faVirus } from "@fortawesome/free-solid-svg-icons";
// import RoutingData from "../routes/routesInstance";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

/*
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
*/

const Views = () => {
  return (
    <>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/products/:id">
        <ProductPage/>
      </Route>
    </>
  )
}

export default Views;
