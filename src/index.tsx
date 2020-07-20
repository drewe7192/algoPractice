import React from "react"
import ReactDOM from "react-dom"
import { prototypesBootstrap } from './prototypes'
import { App } from './components/App'

// CSS files referenced here
import './css/index.css'
import './css/table.css'

// setting up our prototypes here
prototypesBootstrap.setUp()

// React Setup here
const injectArea = document.getElementById("root")
ReactDOM.render(<App/>,injectArea)