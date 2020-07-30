import React from "react"
import ReactDOM from "react-dom"
import { prototypesBootstrap } from './prototypes'
import { App } from './components/App'
import { problemsSet, Problems } from './problems/recursion/problems'
import { DateSolver } from './problems/DateProblem'

// CSS files referenced here
import './css/index.css'
import './css/flexbox.css'
import './css/table.css'
import './css/navigation.css'

// setting up our prototypes here
prototypesBootstrap.setUp()

// algoexpert questions
problemsSet([Problems.all])

// Date Problem Starts Over Here...
const outDates = new DateSolver('-').preprocessDates([
    "20th Oct 2052", 
    "6th Jun 1933", 
    "26th May 1960", 
    "20th Sep 1958", 
    "16th Mar 2068", 
    "25th May 1912", 
    "16th Dec 2018", 
    "6th Jun 1933", 
    "26th Dec 2061", 
    "4th Nov 2030", 
    "28th Jul 1963",
    "15th Apr 1989"
])
console.prettyLog(outDates)

// React Setup here
const injectionArea = document.getElementById("root") as HTMLDivElement
ReactDOM.render(<App/>,injectionArea)