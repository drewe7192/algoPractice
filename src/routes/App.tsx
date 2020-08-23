import React, { FC, useState } from "react";
import NavigationHeader from "../views/NavHead";
import { NavigationItem } from "../views/NavHead";
import HamburgerSlider from "../views/HamburgerSlider";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import RoutingData from "./routesInstance";
import Home from "../assets/Home.svg";
import { DropDownMenu } from "../views/NavHead";

export const App: FC = () => {
  const [menuIsShown, setMenuShown] = useState<boolean>(false);
  const hamburgerButtonToggle = (): void => setMenuShown(!menuIsShown);

  const extractRoutesFromRoutesInfo = () =>
    RoutingData.getRoutingData().map((r) => {
      const { exact, Component, to } = r;
      return (
        <Route key={to} exact={exact} path={to}>
          <Component />
        </Route>
      );
    });

  return (
    <Router>
      <HamburgerSlider
        onHamburgerClick={hamburgerButtonToggle}
        menuIsShown={menuIsShown}
      />
      <div className="flex-item vertical fullDim">
        {/* <NavigationHeader onHamburgerClick={hamburgerButtonToggle} /> */}
        <NavigationHeader>
          <NavigationItem icon="g" />
          <NavigationItem icon="g">
            <DropDownMenu />
          </NavigationItem>
        </NavigationHeader>
        <div className="main stretched fullDim">
          <Switch>{extractRoutesFromRoutesInfo()}</Switch>
        </div>
      </div>
    </Router>
  );
};
