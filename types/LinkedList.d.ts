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
    push(value: T | Array<T>):void
    pop(): nullable<ISLLNode<T>>
    printAllNodes(): void
    toArray():Array<T>
    shift():void// Pop but at Head
    unshift(value: T):void// Push to Head
    get(indx: number): nullable<ISLLNode<T>>
    set(indx: number, value: T): void
}