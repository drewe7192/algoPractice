import React, { FC, useEffect, useState, ReactNode } from 'react'

import { PeopleCollection, Person } from './../Data/PeopleSample'
import { LinkedList } from './../datastructures/SLL'
import { FamilyName } from './../enums'

type animatedFunction = () => ISLLActions<IPerson>

interface ISLLPageProps {}
export const SLLPage: FC<ISLLPageProps> = (props: ISLLPageProps) => {

    // State management
    const [linkedList, changeLinkedList] = useState<ISLLActions<IPerson>>(LinkedList.createNewActions<IPerson>())

    // constant Extra Family Members
    const restOfFerreirasFamily: Array<IPerson> = [
        new Person({first: 'Deborah', last: 'Ribeiro'}, 60, FamilyName.Ferreira),
        new Person({first: 'Eduardo', last: 'Ferreira'}, 65, FamilyName.Ferreira),
        new Person({first: 'Marina', last: 'Ferreira'}, 34, FamilyName.Ferreira),
    ]

    const _animationActions: Array<animatedFunction> = [
        () => {
            // first addition like so...
            linkedList.push(PeopleCollection.getFerreiraFamily())
            return linkedList
        },
        () => {
            // removing last member from Family...
            linkedList.pop()
            return linkedList
        },
        () => {
            // Adding Melinda Gates, Bill Gates Wife
            // Showing you that we can add...
            linkedList.push(restOfFerreirasFamily)
            return linkedList
        },
        () => {
            // Can also add like this...
            linkedList.push(new Person({first: 'Glen', last: 'Amos'}, 59, FamilyName.Amos))
            return linkedList
        },
        () => {
            // removes from the head
            linkedList.shift()
            return linkedList
        },
        () => {
            // adding the following...fromHead*
            linkedList.unshift(new Person({first: 'uncle', last: 'fifi'}, 31, FamilyName.Ferreira))
            return linkedList
        },
        () => {
            // adding the following...fromHead*
            linkedList.unshift(new Person({first: 'Drew', last: 'Sutherland'}, 31, FamilyName.Ferreira))
            return linkedList
        }
    ]

    const [animationActions, setAnimationActs] = useState(_animationActions)

    useEffect(() => {
        const animationActionsCopy = [...animationActions]
        if(Array.isArray(animationActionsCopy) && animationActionsCopy.length > 0) {
            // gets from beg of collection...
            const act = animationActionsCopy.shift()

            // timing function...
            setTimeout(() => {
                // new collection will now have one less func
                setAnimationActs(animationActionsCopy)
                if(act) {
                    const copy = Object.assign({}, act())
                    changeLinkedList(copy)
                }
            }, 1000)

        }
    }, [animationActions])


    const leftDashboard = () => <div id="SLLPage-left" className="stretched flex-item centered">
        LEFT SIDE DASH
    </div>


    const rightDashboard = () => <div id="SLLPage-right" className="centered flex-item stretched">
        <span className="centered flex-item auto-overflow SLL-List fullDim vertical">
            <SLLNodeButton nodeRef={linkedList.head} displayKey="fullName"/>
        </span>
    </div>

    // workInProgress
    const addNodeForm = () => {
        return <>
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
        </>
    }

    return <>
        <div className="fullDim flex-item">
            {leftDashboard()}
            {rightDashboard()}
        </div>
    </>
}

interface ISLLNodeButtonProps<T> {
    nodeRef: nullable<ISLLNode<T>>
    displayKey?: keyof T
}

function SLLNodeButton<T>(props: ISLLNodeButtonProps<T>) {

    const _renderNodeStem = (hasNext: boolean):ReactNode =>  hasNext ? <div className="SLLstem flex-item centered"></div> : null

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
