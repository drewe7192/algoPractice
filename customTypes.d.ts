interface IName {
    first: string
    last: string
    middle?: string
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
    MergeSort(compareFn: (a: T, b: T) => boolean, collection?: Array<T>): Array<T>
}