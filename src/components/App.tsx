import React, { FC } from 'react'
import { MergeSortPage } from './../pages/MergeSort'
import { SLLPage } from './../pages/SLLPage'
import HomePage from './../pages/Root'

import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

interface IAppProps {}

export const App:FC<IAppProps> = (props: IAppProps) => {
    return <Router>
        <div className="flex-item vertical fullDim">

            <div className="navigation">
                <div className="flex-item wrapped space-evenly darkBackground">
                    <NavLink activeClassName="selected" to="/MergeSort" className="bordered button centered flex-item noDecoration"><span>Merge Sort</span></NavLink>
                    <NavLink activeClassName="selected" to="/SLL" className="bordered button centered flex-item noDecoration"><span>SLL Code</span></NavLink>
                </div>
            </div>
            
            <div className="main stretched fullDim">
                <Switch>
                    <Route path="/MergeSort">
                        <MergeSortPage/>
                    </Route>
                    <Route path="/SLL">
                        <SLLPage/>
                    </Route>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>

}