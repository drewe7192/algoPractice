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
        linkedList.push(new Person({first: 'Melinda', last: 'Gates'}, 55, FamilyName.Gates))

        // changing pointers
        const copy = Object.assign({}, linkedList)
        changeLinkedList(copy)

    }, [])

    return <div>
        <SLLNodeButton nodeRef={linkedList.head} displayKey="fullName"/>
    </div>

}

interface ISLLNodeButtonProps<T> {
    nodeRef: nullable<ISLLNode<T>>
    displayKey?: keyof T
}

function SLLNodeButton<T>(props: ISLLNodeButtonProps<T>) {

    const genericRecursiveRender = () =>
    {
        if(!props.nodeRef) return null
        const { value, next } = props.nodeRef
        const { displayKey } = props

        let hasNextNode = next !== null
        let nextNodeRef: ReactNode = null

        if(hasNextNode)
            nextNodeRef = <SLLNodeButton nodeRef={next as ISLLNode<T>} displayKey={props.displayKey}/>
        let displayValue: ReactNode = null
        if(!displayKey) {
            displayValue = <pre>{JSON.stringify(value, null, 2)}</pre>
        } else if(typeof value[displayKey] !== 'object') {
            displayValue = value[displayKey]
        } else {
            displayValue = <pre>{JSON.stringify(value[displayKey], null, 2)}</pre>            
        }

        return <>
            <div className="SLL_node">{displayValue}</div>
            {nextNodeRef}
        </>
    }

    return genericRecursiveRender()
}
