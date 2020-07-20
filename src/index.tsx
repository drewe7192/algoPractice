import React from "react"
import ReactDOM from "react-dom"
import { prototypesBootstrap } from './prototypes'
// import { Program } from './programLogic'

// CSS inject like this
import './css/index.css'

export interface HelloWorldProps {
    userName: string;
    lang: string;
  }

const App = (props: HelloWorldProps) => <h1>Hi {props.userName} from React! Welcome to {props.lang}!</h1>

prototypesBootstrap.setUp()
// const sample = Program.getAppInstance()
// sample.SLLCode()
// sample.mergeSortCode()
ReactDOM.render(<App userName="Developer" lang="TypeScript" />,document.getElementById("root"))