/**
 *      *********************************
 *      *           LINKED LIST         *
 *      *********************************
 * 
 * Description
 * ------------------------------------------------
 *      In computer science, 
 *      a linked list is a linear collection of data elements 
 *      whose order is not given by their physical placement in memory. 
 *      Instead, each element(node) points to the next. 
 *      It is a data structure consisting of a collection of nodes 
 *      which together represent a sequence
 * 
 *      Nodes can only point to the next node...
 *      -------------------------------------------------
 *          node(A) -> node(B)
 *          node(B) -> node(C)
 * 
 *      Node has access to a property called value
 *          node(A)
 *              + value: 6
 */

import { debug } from "console"
import { faRulerHorizontal } from "@fortawesome/free-solid-svg-icons"
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants"

class SLLNode<T> implements ISLLNode<T> {
    public value: T
    public next: nullable<ISLLNode<T>>
    constructor(value: T, next: nullable<ISLLNode<T>> = null)
    {
        this.value = value
        this.next = next
    }
}

export class LinkedList<T> implements ISLLAttributes<T>, ISLLActions<T>
{
    public head: nullable<ISLLNode<T>>
    public tail: nullable<ISLLNode<T>>
    public count: number

    private constructor()
    {
        this.head = null
        this.tail = null
        this.count = 0
    }

    /**
     * Returns the head
     */
    public getFirstNode(): nullable<ISLLNode<T>>
    {
        return this.head
    }

    public static createNew<T>(): LinkedList<T>
    {
        return new LinkedList<T>()
    }

    public static createNewActions<T>(): ISLLActions<T>
    {
        return this.createNew()
    }

    /**
     * Adds a new value to the SLL
     * @param value Will be the new value we are adding to the SLL.
     */
    public push(value: T | Array<T>):void
    {
        if(Array.isArray(value)) {
            value.forEach((n) => this.push(n))
        } else {
            this.count++
            const newNode = new SLLNode<T>(value)
            if(this.head === null || this.count === 0) {
                this.head = newNode // new SLLNode<T>(value)
                this.tail = this.head
            } else {
                const currentTail = this.tail as ISLLNode<T>
                // const newTail = new SLLNode<T>(value)
                currentTail.next = newNode
                this.tail = newNode
            }
        }
    }

    /**
     * Pop but at Head
     */
    public shift():void{
        if(this.count === 0) {
            return
        } else if(this.count === 1) {
            this.pop()
            return
        } else if(this.count > 1) {
            let currentHead = this.head
            if(currentHead && currentHead.next) {
                const newNext = currentHead.next
                this.head = null
                this.head = newNext
            }
            this.count--
        }
    }

    /**
     * Push to Head
     * @param value is value of generic T
     */
    public unshift(value: T):void
    {
        if(this.count ===0) {
            this.push(value)
        } else {
            const currentHead = this.head
            this.head = new SLLNode(value)
            this.head.next = currentHead
            this.count++
        }
    }


    public pop(): nullable<ISLLNode<T>>
    {
        if(this.count > 0) {
            this.count--
            if(this.count === 1) {
                // returns to initial state...
                this.tail = null
                this.head = null
            } else {
                // need to find the node prior to tail...
                let nodePriorToTail = this.head
                while(nodePriorToTail && nodePriorToTail.next !== this.tail) {
                    nodePriorToTail = nodePriorToTail.next
                }
                this.tail = null
                // turning tail into the second to last, new last...
                if(nodePriorToTail && nodePriorToTail.next)
                    nodePriorToTail.next = null
                this.tail = nodePriorToTail
            }
        }
        return this.tail
    }


    /**
     * Will display all nodes in SLL
     */
    public printAllNodes(): void
    {
        this.toArray().forEach((node) => {
            console.log(node)
            // console.prettyLog(node)
        })
    }

    public toArray():Array<T>
    {
        const collection: Array<T> = []
        if(this.count === 0) return collection
        let displayNode = this.head
        collection.push((displayNode  as ISLLNode<T>).value)
        if(displayNode && displayNode.next) displayNode = displayNode.next
        while(displayNode !== null) {
            if(displayNode !== null) collection.push(displayNode.value)
            displayNode = displayNode.next
        }
        return collection
    }

    /**
     * 
     * @param indx 
     */
    public get(indx: number): nullable<ISLLNode<T>> {
        let returnNode = null
        let isOutOfBounds = false
        if(indx < 0) {
            isOutOfBounds = true
            console.error('passed indx must be an integer greater than 0, out of bounds exception')
        } else if(indx > this.count-1) {
            isOutOfBounds = true
            console.error('passed indx is greater than this count, out of bounds exception')
        }
        if(isOutOfBounds) return returnNode

        // if we are asking for the first index
        returnNode = this.getFirstNode()
        if(indx===0) return returnNode
        if(indx === this.count - 1) return this.tail

        let i = 0
        while(i !== indx && returnNode && returnNode.next)
        {
            i++
            returnNode = returnNode.next
        }
        return returnNode
    }


    public set(indx: number, value: T): void
    {
        const foundNode = this.get(indx)
        if(foundNode) foundNode.value = value
    }


    public insert(indx: number, value: T): void
    {
        //#region VALIDATION LOGIC FIRST
        const boundLimit = this.count
        if(indx < 0 || indx > boundLimit){
            if(indx < 0) {
                console.error('index passed cannot be negative')
            } else {
                console.error('index passed cannot be greater than ' + boundLimit)
            }
            return
        }
        //#endregion

        if(indx === 0) {
            this.unshift(value)
            return
        } else if(indx === this.count) {
            this.push(value)
            return
        } else{
            const priorNode = this.get(indx-1)
            if(priorNode && priorNode.next) {
                // ref to what will be our nodes Next....
                let replacementNode = priorNode.next
                const newNode = new SLLNode<T>(value)
                newNode.next = replacementNode
                priorNode.next = newNode
            }
        }
    }

    public remove(index:number):void
    {
        if(index < 0 || index > this.count - 1)
        {
            console.error('out of bounds error...')
            return
        }
        if(index === 0) {
           this.shift()
           return
        } else {
            this.count--
            const priorNode = this.get(index-1)
            if(priorNode) {
                const deleteNode = priorNode.next
                let newNext = null
                if(deleteNode && deleteNode.next) newNext = deleteNode.next
                priorNode.next = newNext
            }
        }
    }


    // 13 27 32 71
    // 71 32 27 13
    public reverse():void
    {
        // variables...
        let prev: nullable<ISLLNode<T>> = null
        let next: nullable<ISLLNode<T>> = null
        let current: nullable<ISLLNode<T>> = this.head
        while (current != null) { 
            next = current.next; 
            current.next = prev; 
            prev = current; 
            current = next; 
        } 
        this.head = prev
        /*
        // create a var called node and init to the head
        let node = this.head
        // swap head and tail
        this.head = this.tail
        this.tail = node

        // create a var called next
        let next: nullable<ISLLNode<T>> = null
        // create a var called prev
        let prev: nullable<ISLLNode<T>> = null

        // loopingThrough...
        for(let i = 0; i < this.count; i++) 
        {
            if(node && node.next) {
                next = node.next
                node.next = prev
                prev = node
                node = next
            }
        }
        */

    }

}