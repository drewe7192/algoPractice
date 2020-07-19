import { Program } from './programLogic'
import { Code } from './enums'
import { AppSetup } from './prototypes'

// will clear at every bundle
console.clear()

// Code that needs to run after prototypes have been declared
function start()
{
    // what I want to display on the console is dependant on what gets passed in...
    const consoleDisplay: Array<Code> = [
        Code.SLL
    ]

    // starting the app like this...
    Program.getAppInstance(consoleDisplay).Start()
}

AppSetup.prototypesDeclaration()
start()