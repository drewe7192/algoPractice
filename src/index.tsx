import React from "react"
import ReactDOM from "react-dom"
import { prototypesBootstrap } from './prototypes'
import { App } from './components/App'
import { recursionProblemsSet, recursionProblem } from './recursion/problems'

// CSS files referenced here
import './css/index.css'
import './css/flexbox.css'
import './css/table.css'
import './css/navigation.css'

// setting up our prototypes here
prototypesBootstrap.setUp()

// will run the recursion problemSet
recursionProblemsSet([recursionProblem.other])

// React Setup here
const injectionArea = document.getElementById("root") as HTMLDivElement
ReactDOM.render(<App/>,injectionArea)