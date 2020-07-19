import { FamilyName } from './../enums'

class Person implements IPerson
{
    public name: IName
    public age: number
    public profession: string
    public familyName: FamilyName
    constructor(name: IName, age: number, profession: string, family: FamilyName)
    {
        this.name = name
        this.age = age
        this.profession = profession
        this.familyName = family
    }    
}



export abstract class PeopleCollection
{
    private static readonly _Data: Array<IPerson> = [
        new Person({first: 'Drew', last: 'Sutherland'}, 26,'Developer', FamilyName.Sutherland),
        new Person({first: 'Felipe', last: 'Ferreira', middle: 'Dutra'}, 31, 'Programmer', FamilyName.Ferreira),
        new Person({first: 'Rebecca', last: 'Amos', middle: 'Rose'}, 31, 'Nurse Practicioner', FamilyName.Ferreira),
        new Person({first: 'Sierra', last: 'Applewhite'}, 25, 'Web Developer', FamilyName.Applewhite),
        new Person({first: 'Arya', middle: 'Ann', last: 'Ferreira'}, 2/52, 'Professional Baby', FamilyName.Ferreira)
    ]

    public static getSampleData()
    {
        return PeopleCollection._Data
    }

    public static getFerreiraFamily(): Array<IPerson>
    {
        return PeopleCollection._Data.filter(name => name.familyName === FamilyName.Ferreira)
    }


}