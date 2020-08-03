import React, { FC, useState } from "react"
import { MergeSortPage } from "./../views/MergeSortPage"
import { SLLPage } from "./../views/SLLPage"
import { Groupings, RoutesInfo } from './../routes/routesData'
import { Tiles } from './../routes/Tiles'
import house from "./../assets/Home.png"

import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";

export const App: FC = () => {
  const [menuIsShown, setMenuShown] = useState<boolean>(false);
  const hamburgerButtonToggle = (): void => setMenuShown(!menuIsShown);

  const hamburgerButton = () => {
    return (
      <div>
        <svg onClick={hamburgerButtonToggle} className="hamBurgerLink" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
    );
  };

  const getNavigation = () => {
    return (
      <div className="navigation">
        {hamburgerButton()}
        <NavLink exact={true} className="houseLink" to="/">
          <img height="40vh" className="home" src={house} alt="home page" />
        </NavLink>
      </div>
    );
  };

  /**
   * THIS IS THE LIST INSIDE THE HAMBURGER MENU
   */
  const buildHamMenuList = (): Array<JSX.Element> | null => {

    if(!Array.isArray(Groupings) || Groupings.length === 0) return null
    return Groupings.map(groupingObject => {

      const { group, groupName } = groupingObject

      const options = RoutesInfo.filter(r => r.group === group).map(gr => {
        const { title, to } = gr
        return <NavLink key={title} onClick={hamburgerButtonToggle} activeClassName="selected" to={to} className="noDecoration"><span>{title}</span></NavLink>
      })

      return <div key={groupName}>
        <h1>{groupName}</h1>
        {options}
      </div>
    })
  }

  const getSubNav = () => {
    let className = "flex-item subNavigation_area";
    let _className = "display";
    if (menuIsShown) className += " display";
    else _className = "noDisplay";
    return (
      <div className={className}>
        <div className="selection-zone stretched">
          <div className={_className}>

            {buildHamMenuList()}

          </div>
        </div>
        <div className="shadow-zone clickArea" onClick={hamburgerButtonToggle}></div>
      </div>
    );
  };

  return (
    <Router>
      {getSubNav()}
      <div className="flex-item vertical fullDim">
        {getNavigation()}
        <div className="main stretched fullDim">
          <Switch>
            <Route exact path="/MergeSort">
              <MergeSortPage />
            </Route>
            <Route exact path="/SLL">
              <SLLPage />
            </Route>
            <Route exact path="/">
              <Tiles tileData={RoutesInfo}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
