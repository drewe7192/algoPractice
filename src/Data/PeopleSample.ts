class Person implements IPerson
{
    public name: IName
    public age: number
    public profession: string
    constructor(name: IName, age: number, profession: string)
    {
        this.name = name
        this.age = age
        this.profession = profession
    }    
}

export abstract class PeopleCollection
{
    private static readonly _Data: Array<IPerson> = [
        new Person({first: 'Drew', last: 'Sutherland'}, 26,'Developer'),
        new Person({first: 'Felipe', last: 'Ferreira', middle: 'Dutra'}, 31, 'Programmer'),
        new Person({first: 'Rebecca', last: 'Amos', middle: 'Rose'}, 31, 'Nurse Practicioner'),
        new Person({first: 'Sierra', last: 'Applewhite'}, 25, 'Web Developer'),
        new Person({first: 'Arya', middle: 'Ann', last: 'Ferreira'}, 2/52, 'Professional Baby')
    ]

    public static getSampleData()
    {
        return PeopleCollection._Data
    }
}