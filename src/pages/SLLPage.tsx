import React, { FC, useEffect, useState } from 'react'

import { PeopleCollection } from './../Data/PeopleSample'
import { LinkedList } from './../datastructures/SLL'

interface ISLLPageProps {}
export const SLLPage: FC<ISLLPageProps> = (props: ISLLPageProps) => {

    const [linkedList, changeLinkedList] = useState(LinkedList.createNewActions<IPerson>())

    useEffect(() => {

        const SLLInstance = LinkedList.createNewActions<IPerson>()

        PeopleCollection.getFerreiraFamily().forEach(person => {
            SLLInstance.push(person)
        })

    }, [])

    return <div>DISPLAY THAT YOU CAN USE SLL HERE!!!</div>

}