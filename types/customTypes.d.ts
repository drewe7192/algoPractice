type nullable<T> = null | T

interface IName {
    first: string
    last: string
    middle?: string
}


enum FamilyName {
    Ferreira = 0,
    Sutherland = 1,
    Applewhite = 2,
    Gates = 3,
}

interface IPerson {
    name: {
        first: string
        last: string
        middle?: string
    }
    age: number
    // profession: string,
    familyName: FamilyName
}

interface Employee extends IPerson {
    sallary: number
    profession: string
    email: string
}

/* these function(s) is defined in index.ts in the bootstrapPrototypes IFFE */
interface Array<T> {
    /* Will sort collection with predicate passed in */
    mergeSort(compareFn: (a: T, b: T) => boolean, collection?: Array<T>): Array<T>
}

interface Console {
    prettyLog<T>(fancyObject: T): void
}