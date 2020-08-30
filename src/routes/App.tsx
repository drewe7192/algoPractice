import React, { FC } from "react";
import NavigationHeader from "../views/NavHead";
import { NavigationItem } from "../views/NavHead";
import { DropDownMenu } from "../views/NavHead";
import Views from "../views/Views";
import { HashRouter as Router, Switch } from "react-router-dom";
import Home from "../assets/Home.svg";
import github from "../assets/github.png";
import hamburger from "../assets/hamburger.svg";

export const App: FC = () => {
  return (
    <Router>
      <div className="flex-item vertical fullDim">
        <NavigationHeader>
          <NavigationItem icon={hamburger}>
            <DropDownMenu />
          </NavigationItem>
          <NavigationItem icon={Home} />
        </NavigationHeader>
        <div className="main stretched fullDim">
          <Switch>
            <Views />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
