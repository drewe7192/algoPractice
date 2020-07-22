interface ISLLNode<T>
{
    value: T
    next: nullable<ISLLNode<T>>
}

interface ISLLAttributes<T>
{
    head: nullable<ISLLNode<T>>
    tail: nullable<ISLLNode<T>>
    count: number
}

interface ISLLActions<T> 
{
    head: nullable<ISLLNode<T>>
    // getFirstNode(): nullable<ISLLNode<T>>
    push(value: T):void
    pop(): nullable<ISLLNode<T>>
    printAllNodes(): void
    toArray():Array<T>
}