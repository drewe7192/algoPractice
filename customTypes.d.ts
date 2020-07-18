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

/* these function(s) is defined in index.ts in the bootstrapPrototypes IFFE */
interface Array<T> {
    /* Will sort collection with predicate passed in */
    MergeSort(compareFn: (a: T, b: T) => boolean, collection?: Array<T>): Array<T>
}

interface Console {
    PrettyLog<T>(fancyObject: T): void
}