import { PeopleCollection } from './Data/PeopleSample'
import { Code } from './enums'

// quick overview of what program can do
interface IProgramActions
{
    Start(): void    
}

export class Program implements IProgramActions
{
    // Member Variables for Program
    private static _instance: Program
    private _Codes: Set<Code>

    public StartCount: number = 0


    private constructor(Codes: Array<Code>)
    {
        this._Codes = new Set<Code>(Codes)
    }

    // Singleton Create Pattern
    public static getAppInstance(myCodes: Array<Code>): IProgramActions
    {
        if(!Program._instance) Program._instance = new Program(myCodes)
        return Program._instance
    }

    private _MergeSortCode():void
    {
        // see file titled PeopleSample.ts to see how this data is brought over
        const peopleData = PeopleCollection.getSampleData()
        // asc order like this...
        // const ASCsorted = peopleData.MergeSort((a,b) => a.age > b.age)
        const DESCsorted = peopleData.MergeSort((a,b) => a.age < b.age)
        console.PrettyLog(DESCsorted)
    }

    public Start(): void
    {
        this.StartCount++
        
        if(this.StartCount > 1)
            throw "this function can only be called once"
        
        if(this._Codes.has(Code.MergeSort)) this._MergeSortCode()

    }
}