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

interface IAppProps {}

export const App:FC<IAppProps> = (props: IAppProps) => {


    const [menuIsShown, setMenuShown] = useState<boolean>(false)
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
            {/*
            <div className="flex-item wrapped space-evenly">
                <NavLink activeClassName="selected" to="/MergeSort" className="bordered button centered flex-item noDecoration"><span>Merge Sort</span></NavLink>
                <NavLink activeClassName="selected" to="/SLL" className="bordered button centered flex-item noDecoration"><span>SLL Code</span></NavLink>
            </div>
            */}
        </div>
    }

    const getSubNav = () => {
        let className = 'flex-item subNavigation_area'
        if(menuIsShown) className += ' display'
        return <div className={className}>
            <div className="selection-zone stretched">
            </div>
            <div className="shadow-zone">
            </div>
            {/* 
                DRAW OUT LOGIC THAT WILL DISPLAY THE HAMBURGER OPTIONS HERE IN ORGANIZED WAY...
            */}
        </div>
    }

    return <Router>
        {getSubNav()}
        <div className="flex-item vertical fullDim">
            {getNavigation()}
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