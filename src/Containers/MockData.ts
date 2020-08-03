import { FamilyName } from "../enums";
import purpose from "./../assets/purpose.png";

export class Person implements IPerson {
  public name: IName;
  public age: number;
  public familyName: FamilyName;

  constructor(name: IName, age: number, family: FamilyName) {
    this.name = name;
    this.age = age;
    this.familyName = family;
  }

  get fullName(): string {
    const { first, last, middle } = this.name;
    if (middle) return `${first} ${middle} ${last}`;
    return `${first} ${last}`;
  }

  public toEmployee(
    this: IPerson,
    profession: string,
    salary: number,
    email: string
  ): IEmployee {
    return new Employee(
      this.name,
      this.age,
      this.familyName,
      profession,
      salary,
      email
    );
  }
}

class Employee extends Person implements IPerson, IEmployee {
  public salary: number;
  public profession: string;
  public email: string;

  constructor(
    name: IName,
    age: number,
    family: FamilyName,
    profession: string,
    salary: number,
    email: string
  ) {
    super(name, age, family);
    this.salary = salary;
    this.profession = profession;
    this.email = email;
  }
}

export abstract class PeopleCollection {
  private static readonly Felipe: Person = new Person(
    { first: "Drew", last: "Sutherland" },
    26,
    FamilyName.Sutherland
  );
  private static readonly Drew: Person = new Person(
    { first: "Felipe", last: "Ferreira", middle: "Dutra" },
    31,
    FamilyName.Ferreira
  );
  private static readonly Rebecca: Person = new Person(
    { first: "Rebecca", last: "Amos", middle: "Rose" },
    31,
    FamilyName.Ferreira
  );
  private static readonly Sierra: Person = new Person(
    { first: "Sierra", last: "Applewhite" },
    25,
    FamilyName.Applewhite
  );
  private static readonly Arya: Person = new Person(
    { first: "Arya", middle: "Ann", last: "Ferreira" },
    2 / 52,
    FamilyName.Ferreira
  );
  private static readonly Bill: Person = new Person(
    { first: "Bill", last: "Games" },
    64,
    FamilyName.Gates
  );

  private static readonly _Data: Array<IPerson> = [
    PeopleCollection.Felipe,
    PeopleCollection.Drew,
    PeopleCollection.Rebecca,
    PeopleCollection.Sierra,
    PeopleCollection.Arya,
    PeopleCollection.Bill,
  ];

  // Used in MergeSort.tsx
  private static readonly EmployeeData: Array<IEmployee> = [
    PeopleCollection.Felipe.toEmployee(
      "Programmer",
      69999,
      "felipesemail@gmail.com"
    ),
    PeopleCollection.Rebecca.toEmployee(
      "Nurse Practicioner",
      99999,
      "rebeccasemail@gmail.com"
    ),
    PeopleCollection.Drew.toEmployee(
      "entrepreneur",
      1000000,
      "drewsemail@gmail.com"
    ),
    PeopleCollection.Bill.toEmployee(
      "Philanthropist",
      11500000000,
      "billssemail@gmail.com"
    ),
  ];

  public static getSampleData() {
    return PeopleCollection._Data;
  }

  public static getFerreiraFamily(): Array<IPerson> {
    return PeopleCollection._Data.filter(
      (name) => name.familyName === FamilyName.Ferreira
    );
  }

  public static getEmployeeData() {
    return this.EmployeeData;
  }
}