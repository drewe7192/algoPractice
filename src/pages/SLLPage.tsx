import React, { FC, useEffect, useState, ReactNode } from 'react'

import { PeopleCollection, Person } from './../Data/PeopleSample'
import { LinkedList } from './../datastructures/SLL'
import { FamilyName } from './../enums'

interface ISLLPageProps {}
export const SLLPage: FC<ISLLPageProps> = (props: ISLLPageProps) => {

    const [linkedList, changeLinkedList] = useState(LinkedList.createNewActions<IPerson>())

    useEffect(() => {

        PeopleCollection.getFerreiraFamily().forEach(person => {
            linkedList.push(person)
        })

        linkedList.pop()

        // Adding Melinda Gates, Bill Gates Wife
        // Showing you that we can add...
        linkedList.push(new Person({first: 'Melinda', last: 'Gates'}, 55, FamilyName.Other))
        /*
        linkedList.push(new Person({first: 'Arya', last: 'Ferreira'}, 55, FamilyName.Ferreira))
        linkedList.push(new Person({first: 'Deborah', last: 'Ribeiro'}, 55, FamilyName.Ferreira))
        linkedList.push(new Person({first: 'Eduardo', last: 'Ferreira'}, 55, FamilyName.Ferreira))
        linkedList.push(new Person({first: 'Marina', last: 'Ferreira'}, 55, FamilyName.Ferreira))
        linkedList.push(new Person({first: 'Glen', last: 'Amos'}, 55, FamilyName.Amos))
        linkedList.push(new Person({first: 'Julie', last: 'Amos'}, 55, FamilyName.Amos))
        linkedList.push(new Person({first: 'Ashley', last: 'Gates'}, 55, FamilyName.Other))
        linkedList.push(new Person({first: 'Jude', last: 'Gates'}, 55, FamilyName.Other))
        linkedList.push(new Person({first: 'Alex', last: 'Gates'}, 55, FamilyName.Other))
        linkedList.push(new Person({first: 'Robert', last: 'Gates'}, 55, FamilyName.Other))
        */
       
        // changing pointers
        const copy = Object.assign({}, linkedList)
        changeLinkedList(copy)

    }, [])

    return <>
        {/*
        <form>
            <div>
                <p>Name</p>
                <label htmlFor="firstName">first
                    <input type="text" name="firstName" id="firstName"/>
                </label>
                <label htmlFor="lastName">last
                    <input type="text" name="lastName" id="lastName"/>
                </label>
            </div>
            <div>
                <label htmlFor="age">age
                    <input type="number" name="age" id="age"/>
                </label>
            </div>
            <div>
                <input type="submit" value="push new"/>
            </div>
        </form>
        <div className="bordered button">Add new user</div>
        */}
        
        <div className="fullDim flex-item">
            <div id="SLLPage-left" className="stretched">
                LEFT SIDE DASH
            </div>
            <div id="SLLPage-right" className="centered flex-item stretched">
                <span>
                    <SLLNodeButton nodeRef={linkedList.head} displayKey="fullName"/>
                </span>
            </div>
        </div>


    </>
}

interface ISLLNodeButtonProps<T> {
    nodeRef: nullable<ISLLNode<T>>
    displayKey?: keyof T
}

function SLLNodeButton<T>(props: ISLLNodeButtonProps<T>) {

    const _renderNodeStem = (hasNext: boolean):ReactNode => {
        return hasNext ? <div className="SLLstem flex-item centered"></div> : null
    }

    const genericRecursiveRender = () =>
    {
        if(!props.nodeRef) return null
        const { value, next } = props.nodeRef
        const { displayKey } = props

        const hasNext = next !== null
        let nextNodeRef: ReactNode = null
        if(hasNext) nextNodeRef = <SLLNodeButton nodeRef={next as ISLLNode<T>} displayKey={props.displayKey}/>
        let displayValue: ReactNode = null
        if(!displayKey) {
            displayValue = <pre>{JSON.stringify(value, null, 2)}</pre>
        } else if(typeof value[displayKey] !== 'object') {
            displayValue = <span className="bordered SLL-button flex-item centered">
                <span>
                    {value[displayKey]}
                </span>
            </span>
        } else {
            displayValue = <pre>{JSON.stringify(value[displayKey], null, 2)}</pre>            
        }

        return <>
            <div className="SLL_node centered flex-item">
                {displayValue}
            </div>
            {_renderNodeStem(hasNext)}
            {nextNodeRef}
        </>
    }

    return genericRecursiveRender()
}
