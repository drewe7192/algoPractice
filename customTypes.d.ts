type numberOrString = number | string

interface ISortable {
    value: numberOrString
}

interface IPerson {
    name: {
        first: string
        last: string
        middle?: string
    }
    age: number
    profession: string
}

interface Array<T> {
    MergeSort(isAsc: boolean = true, collection?: Array<ISortable>): Array<T>
}