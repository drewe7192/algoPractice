import React, { FC, useState } from 'react'
import { MergeSortPage } from './../pages/MergeSort'
import { SLLPage } from './../pages/SLLPage'
import HomePage from './../pages/Root'
import house from './../assets/Home.png'

import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom"



export const App:FC = () => {

    const [menuIsShown, setMenuShown] = useState<boolean>(true)
    const hamburgerButtonToggle = ():void => setMenuShown(!menuIsShown)

    const hamburgerButton = () => {
        const lineCount = 4
        const allLines: Array<JSX.Element> = []
        for(let i = 0; i < lineCount; i++) allLines.push(<div key={`line-${i}`} className="line"></div>)
        return <div onClick={hamburgerButtonToggle} className="centered flex-item hamburger_button vertical">
            {allLines}
        </div>
    }

    const getNavigation = () => {
        return <div className="navigation">
            {hamburgerButton()}
            <NavLink activeClassName="houseLink selected" to="/">
                <img height="68" className="home" src={house} alt="home page"/>
            </NavLink>
        </div>
    }

    const getSubNav = () => {
        let className = 'flex-item subNavigation_area'
        let _className = 'display'
        if(menuIsShown) className += ' display'
        else _className = 'noDisplay'
        return <div className={className}>
            <div className="selection-zone stretched">
                <div className={_className}>
                    <div>
                        <h1>Sorting</h1>
                        <NavLink onClick={hamburgerButtonToggle} activeClassName="selected" to="/MergeSort" className="noDecoration"><span>Merge Sort</span></NavLink>
                    </div>
                    <div>
                        <h1>Collections</h1>
                        <NavLink onClick={hamburgerButtonToggle} activeClassName="selected" to="/SLL" className="noDecoration"><span>Singly Linked List</span></NavLink>
                    </div>
                </div>
            </div>
            <div className="shadow-zone clickArea" onClick={hamburgerButtonToggle}>
            </div>
        </div>
    }

    return <Router>
        {getSubNav()}
        <div className="flex-item vertical fullDim">
            {getNavigation()}
            <div className="main stretched fullDim">
                <Switch>
                    <Route exact path="/MergeSort">
                        <MergeSortPage/>
                    </Route>
                    <Route exact path="/SLL">
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