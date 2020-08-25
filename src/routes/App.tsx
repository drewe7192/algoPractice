import React, { FC } from "react";
import NavigationHeader from "../views/NavHead";
import { NavigationItem } from "../views/NavHead";
import { HashRouter as Router, Switch } from "react-router-dom";
import { DropDownMenu } from "../views/NavHead";
import Home from "../assets/Home.svg";
import github from "../assets/github.png";
import Views from "../views/Views";

export const App: FC = () => {
  return (
    <Router>
      <div className="flex-item vertical fullDim">
        <NavigationHeader>
          <NavigationItem icon={Home} />
          <NavigationItem icon={github}>
            <DropDownMenu />
          </NavigationItem>
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
