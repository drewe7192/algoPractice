import React, { FC, useState } from 'react'

// NAVIGATION RELATED COMPONENTS
import NavigationHeader from './NavHead'
import HamburgerSlider from './HamburgerSlider'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import RoutingData from './routesInstance'

export const App: FC = () => {
  const [menuIsShown, setMenuShown] = useState<boolean>(false);
  const hamburgerButtonToggle = (): void => setMenuShown(!menuIsShown)


  const extractRoutesFromRoutesInfo = () => RoutingData.getRoutingData().map(r => {
      const { exact, Component, to } = r
      return <Route key={to} exact={exact} path={to}>
        <Component />
      </Route>
    })

  return (
    <Router>
      <HamburgerSlider onHamburgerClick={hamburgerButtonToggle} menuIsShown={menuIsShown}/>
      <div className="flex-item vertical fullDim">
        <NavigationHeader onHamburgerClick={hamburgerButtonToggle}/>
        <div className="main stretched fullDim">
          <Switch>
            {extractRoutesFromRoutesInfo()}
          </Switch>
        </div>
      </div>
    </Router>
  )
}