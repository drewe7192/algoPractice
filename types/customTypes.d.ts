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

interface IEmployee extends IPerson {
    salary: number
    profession: string
    email: string
}

type EmployeeKeys = keyof Employee

interface Array<T> {
    mergeSort(compareFn: (a: T, b: T) => boolean, collection?: Array<T>): Array<T>
}

interface Console {
    prettyLog<T>(fancyObject: T): void
}

interface Number {
    toCurrency: () => string;
}