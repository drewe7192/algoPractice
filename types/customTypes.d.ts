type nullable<T> = null | T

declare module "*.png" {
    const value: string;
    export default value;
  }

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
    Other = 4,
    Amos = 5
}

interface IPersonName {
    first: string
    last: string
    middle?: string    
}

interface IPerson {
    name: IPersonName
    age: number
    familyName: FamilyName
    fullName: string
}

interface IEmployee extends IPerson {
    salary: number
    profession: string
    email: string
}

type EmployeeKeys = keyof Employee

// PROTOTYPES DECLARED HERE
interface Array<T> {
    mergeSort(compareFn: (a: T, b: T) => boolean, collection?: Array<T>): Array<T>
}

interface Console {
    prettyLog<T>(fancyObject: T): void
}

interface Number {
    toCurrency: () => string;
}

interface ObjectConstructor
{
    shallowCopy(): void
}