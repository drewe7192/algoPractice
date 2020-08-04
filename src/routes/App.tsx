import React, { FC, useState } from 'react'
import HomePage from './../views/HomePage'
import { RoutesInfo } from './routesData'
import NavigationHeader from './NavHead'
import HamburgerSlider from './HamburgerSlider'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

interface IAppProps {}
export const App: FC<IAppProps> = (props: IAppProps) => {

  // State if the HamburgerMenuIsShowing or NotShowing
  const [menuIsShown, setMenuShown] = useState<boolean>(false)
  // function that toggles the state of the HamburgerMenuIsShowing state
  const hamburgerButtonToggle = (): void => setMenuShown(!menuIsShown)

  /* WILL DYNAMICALLY RENDER ROUTING BASED ON CONFIGURATION OBJECT LISTED IN  routesData.ts*/
  const extractRoutesFromRoutesInfo = () => RoutesInfo.map(r =>  
    <Route key={r.to} exact={r.exact} path={r.to}>
      <r.Component />
    </Route>)

  return (<Router>
      {/* NAV2 - Hamburger Sliding Menu */}
      <HamburgerSlider onHamburgerClick={hamburgerButtonToggle} menuIsShown={menuIsShown}/>
      <div className="flex-item vertical fullDim">
        {/*  THIS IS THE BLUE BAR ON TOP OF ALL PAGES */}
        <NavigationHeader onHamburgerClick={hamburgerButtonToggle}/>
        <div className="main stretched fullDim">
          <Switch>
            {extractRoutesFromRoutesInfo()}
            {/*MANUALLY ADDING THE HOME PAGE LIKE THIS BECAUSE WE ARE NOT ADDING THIS TO LIST || HAMBURGER*/}
            <Route exact path="/"><HomePage/></Route>
          </Switch>
        </div>
      </div>
    </Router>)
}