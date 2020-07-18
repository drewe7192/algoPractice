import { Program } from './programLogic'
import { Code } from './enums'
import { CustomPrototypes } from './prototypes'

// will clear at every bundle
console.clear();

function start()
{
    // what I want to display on the console is dependant on what gets passed in...
    const consoleDisplay: Array<Code> = [
        Code.MergeSort
    ]

    // starting the app like this...
    Program.getAppInstance(consoleDisplay).Start()
}

CustomPrototypes.create().then(start);