import { PeopleCollection } from "./MockData";
import { LinkedList } from "./../utils/dataStructures/SLL";

// quick overview of what program can do
interface IProgramActions {
  SLLCode(): void;
  mergeSortCode(): void;
  // getAppSquares(): Array<IAppSquare>
}

interface IAppSquare {
  title: string;
  func: Function;
}

export class Program implements IProgramActions {
  // Member Variables for Program
  private static _instance: Program;

  public StartCount: number = 0;

  private constructor() {}

  // Singleton Create Pattern
  public static getAppInstance(): IProgramActions {
    if (!Program._instance) Program._instance = new Program();
    return Program._instance;
  }

  public mergeSortCode(): void {
    // see file titled PeopleSample.ts to see how this data is brought over
    const peopleData = PeopleCollection.getSampleData();
    // asc order like this...
    // const ASCsorted = peopleData.MergeSort((a,b) => a.age > b.age)
    const DESCsorted = peopleData.mergeSort((a, b) => a.age < b.age);
    console.prettyLog(DESCsorted);
  }

  public SLLCode(): void {
    const SLLInstance = LinkedList.createNewActions<IPerson>();
    PeopleCollection.getFerreiraFamily().forEach((person) => {
      SLLInstance.push(person);
    });
    SLLInstance.printAllNodes();
  }
}
