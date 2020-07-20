import React, { FC } from 'react'
import { MergeSortPage } from './../pages/MergeSort'
import { SLLPage } from './../pages/SLLPage'
import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

interface IAppProps {}

export const App:FC<IAppProps> = (props: IAppProps) => {
    return <Router>
        <div>
            <div className="flex-item wrapped space-evenly darkBackground">
                <NavLink activeClassName="selected" to="/MergeSort" className="bordered button noDecoration">Merge Sort</NavLink>
                <NavLink activeClassName="selected" to="/SLL" className="bordered button noDecoration">SLL Code</NavLink>
            </div>
        </div>
        <Switch>
          <Route path="/MergeSort">
              <MergeSortPage/>
          </Route>
          <Route path="/SLL">
              <SLLPage/>
          </Route>
          <Route exact path="/">
              <h1>HOME</h1>
          </Route>
        </Switch>
    </Router>

}