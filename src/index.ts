import { Program } from './programLogic'
import { AppSetup } from './prototypes'
import './css/index.css'

// will clear at every bundle
console.clear()

// Code that needs to run after prototypes have been declared
AppSetup.prototypesDeclaration()

const actionsDivElement: HTMLElement = document.getElementById('actions') as HTMLDivElement
Program.getAppInstance().getAppSquares().forEach(n => {
    const sllDiv = document.createElement('div')
    sllDiv.classList.add('largest')
    sllDiv.classList.add('button')
    sllDiv.onclick = () => n.func()
    sllDiv.textContent = n.title
    actionsDivElement.appendChild(sllDiv)
})