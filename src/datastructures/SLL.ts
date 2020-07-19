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

interface ISLLNode<T>
{
    value: T
    Next: nullable<ISLLNode<T>>
}

interface ISLLAttributes<T>
{
    head: nullable<ISLLNode<T>>
    tail: nullable<ISLLNode<T>>
    count: number
}

interface ISLLActions<T> 
{
    push(value: T):void
    printAllNodes(): void
    toArray():Array<T>
}

class SLLNode<T> implements ISLLNode<T> {
    public value: T
    public Next: nullable<ISLLNode<T>>
    constructor(value: T, next: nullable<ISLLNode<T>> = null)
    {
        this.value = value
        this.Next = next
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
    public push(value: T):void
    {
        this.count++
        const newNode = new SLLNode<T>(value)
        if(this.head === null || this.count === 0) {
            this.head = newNode // new SLLNode<T>(value)
            this.tail = this.head
        } else {
            const currentTail = this.tail as ISLLNode<T>
            // const newTail = new SLLNode<T>(value)
            currentTail.Next = newNode
            this.tail = newNode
        }
    }

    /**
     * Will display all nodes in SLL
     */
    public printAllNodes(): void
    {
        this.toArray().forEach(node => {
            console.prettyLog(node)
        })
    }

    public toArray():Array<T>
    {
        const collection: Array<T> = []
        if(this.count === 0) return collection
        let displayNode = this.head
        collection.push((displayNode  as ISLLNode<T>).value)
        if(displayNode && displayNode.Next) displayNode = displayNode.Next
        while(displayNode !== null) {
            if(displayNode !== null) collection.push(displayNode.value)
            displayNode = displayNode.Next
        }
        return collection
    }

}