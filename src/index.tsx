import React from "react"
import ReactDOM from "react-dom"
import { prototypesBootstrap } from './prototypes'
import { App } from './components/App'
// import { Program } from './programLogic'

// CSS inject like this
import './css/index.css'


prototypesBootstrap.setUp()
// const sample = Program.getAppInstance()
// sample.SLLCode()
// sample.mergeSortCode()
ReactDOM.render(<App userName="Developer" lang="TypeScript" />,document.getElementById("root"))