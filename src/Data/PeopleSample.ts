import { FamilyName } from './../enums'

class Person implements IPerson
{
    public name: IName
    public age: number
    public familyName: FamilyName

    constructor(
        name: IName,
        age: number, 
        family: FamilyName
    )
    {
        this.name = name
        this.age = age
        this.familyName = family
    }

    get fullName()
    {
        const { first, last, middle } = this.name
        if(middle)
            return `${first} ${middle} ${last}`            
        return `${first} ${last}`
    }
}

class Employee extends Person implements IPerson, IEmployee {
    
    public salary: number
    public profession: string
    public email: string

    constructor(
        name: IName, 
        age: number, 
        family: FamilyName, 
        profession: string, 
        salary: number, 
        email: string
    )
    {
        super(name,age, family)
        this.salary = salary
        this.profession = profession
        this.email = email
    }
}





export abstract class PeopleCollection
{
    private static readonly _Data: Array<IPerson> = [
        new Person({first: 'Drew', last: 'Sutherland'}, 26, FamilyName.Sutherland),
        new Person({first: 'Felipe', last: 'Ferreira', middle: 'Dutra'}, 31,  FamilyName.Ferreira),
        new Person({first: 'Rebecca', last: 'Amos', middle: 'Rose'}, 31,  FamilyName.Ferreira),
        new Person({first: 'Sierra', last: 'Applewhite'}, 25, FamilyName.Applewhite),
        new Person({first: 'Arya', middle: 'Ann', last: 'Ferreira'}, 2/52, FamilyName.Ferreira)
    ]

    // Used in MergeSort.tsx
    private static readonly EmployeeData: Array<IEmployee> = [
        new Employee({first: 'Felipe',last: 'Ferreira'}, 31, FamilyName.Ferreira, 'Programmer', 69999, 'felipesemail@gmail.com'),
        new Employee({first: 'Rebecca',last: 'Amos'}, 31, FamilyName.Ferreira, 'Nurse Practicioner', 99999, 'rebeccasemail@gmail.com'),
        new Employee({first: 'Drew',last: 'Sutherland'}, 26, FamilyName.Sutherland, 'entrepreneur', 1000000, 'felipesemail@gmail.com'),
        new Employee({first: 'Bill',last: 'Games'}, 64, FamilyName.Gates, 'Philanthropist', 11500000000, 'billssemail@gmail.com'),
    ]

    public static getSampleData()
    {
        return PeopleCollection._Data
    }

    public static getFerreiraFamily(): Array<IPerson>
    {
        return PeopleCollection._Data.filter(name => name.familyName === FamilyName.Ferreira)
    }



    public static getEmployeeData()
    {
        return this.EmployeeData
    }


}