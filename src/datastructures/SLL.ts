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

    public get(indx: number): nullable<ISLLNode<T>> {
        let returnNode = this.getFirstNode()
        if(indx === 0) return returnNode
        if(indx > this.count-1) {
            // throw "passed indx is greater than this count, out of bounds exception"
            console.error("passed indx is greater than this count, out of bounds exception")
            return null
        }
        let i = 0
        while(i < indx && returnNode && returnNode.next)
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

}